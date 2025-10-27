import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//! Register User
export const registerUser = async (req, res) => {
  const {name, email, password} = req.body

  try {
    const existingUser = await User.findOne({email})

    if (existingUser) {
      return res.status(400).json({message: "User already exists"})
    }

    const user = await User.create({name, email, password})

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

//! Login user
export const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.findOne({email})
    if (!user) return res.status(200).json({message: "Invalis Credentials"})

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({message: "Invalid Credentials"})

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

//* Token generation
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30d"})
}
