import {User} from "../models/user.model.js"
import {ApiResponse} from "../utils/api-response.js"
import {ApiError} from "../utils/api-error.js"
import {asyncHandler} from "../utils/async-handler.js"
import {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
} from "../utils/mail.js"
import jwt from "jsonwebtoken"

//SECTION Get the access and refresh token
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId)
    if (!user) {
      throw new ApiError(400, "User not found while generating tokens")
    }
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    user.refreshToken = refreshToken
    await user.save({validateBeforeSave: false})
    return {accessToken, refreshToken}
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating access token")
  }
}

//SECTION Register the user
const registerUser = asyncHandler(async (req, res) => {
  const {email, username, password} = req.body //* get the required fields

  //* Find the user
  const existedUser = await User.findOne({
    $or: [{username}, {email}],
  })

  //* Check if the user alredy exists
  if (existedUser) {
    throw new ApiError(409, "User with this username or eamil already exists")
  }

  //* Otherwise create the user
  const user = await User.create({
    email,
    password,
    username,
    isEmailVerified: false,
  })

  const {unHashedToken, hashedToken, tokenExpiry} = user.generateTemporaryToken()

  user.emailVerificationToken = hashedToken
  user.emailVerificationExpiry = tokenExpiry

  await user.save({validateBeforeSave: false})

  //! Sent the verification email during the registration
  await sendEmail({
    email: user?.email,
    subject: "Please verify your email",
    mailgenContent: emailVerificationMailgenContent(
      user.username,
      `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`, //? This will take to the frontend page so add a frontend route here in future from frontend you will send the req to "/api/v1/users/verify-email/${unHashedToken}" this route for erification and add a route in backend for this
    ),
  })

  //* These are the fields you don't want to send to the user
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
  )

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user")
  }

  //* Show the response to devloper during testing
  res
    .status(201)
    .json(
      new ApiResponse(
        200,
        {user: createdUser},
        "User registered successfully and verification eamil has been sent on your email",
      ),
    )
})

//SECTION - Login the user
const login = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  //* If user doesn't provide one of them
  if (!email || !password) {
    throw new ApiError(400, "email and password required")
  }

  const user = await User.findOne({email})
  //* If the user doesn't exists
  if (!user) {
    throw new ApiError(400, "user doesn't exists")
  }

  //* Validate password
  const isPasswordValid = await user.isPasswordCorrect(password) //* That method is in user schema

  if (!isPasswordValid) {
    throw new ApiError(400, "invalid credentials")
  }

  const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
  )

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  }

  //* Return the response during testing
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {user: loggedInUser, accessToken, refreshToken},
        "User logged in successfully",
      ),
    )
})

//SECTION - Logout the user
const logoutUser = asyncHandler(async (req, res) => {
  //* Reset The refresh token
  await User.findByIdAndDelete(
    req.user._id,
    {
      $set: {refreshToken: ""},
    },
    {new: true},
  )

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  path: "/"
  }

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User Logged out"))
})

export {registerUser, login, logoutUser}
