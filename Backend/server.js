import express from "express"
import dotenv from "dotenv" 
import cors from "cors"
import connectDB from "./config/db.js"


dotenv.config(); //* Load env variables
const app = express()

//* Middleware
app.use(cors())
app.use(express.json())

//* Routes


//! Default Route
app.get("/", (req, res) => {
  res.send("Odisha heritage explorer")
})


//* Connect to DB
connectDB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server is running on port 3000")
})