import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config() //* Load env variables
const app = express()

//* Middleware
app.use(cors({origin: "http://localhost:5173", credentials: true}))
app.use(express.json())

//* Routes
app.use("/api/users", userRoutes)

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
