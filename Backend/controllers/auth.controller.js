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

//REVIEW Get the access and refresh token
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId)
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    user.refreshToken = refreshToken
    await user.save({validateBeforeSave: false})
    return {accessToken, refreshToken}
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating the access token")
  }
}

//REVIEW Register the user
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
      `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`, //? This will take to the frontend page so add a frontend route here in future form frontend you will send the req to "/api/v1/users/verify-email/${unHashedToken}" this route for erification and add a route in backend for this
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
