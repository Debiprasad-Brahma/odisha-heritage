import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//SECTION - Basic configurations
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

//SECTION - cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
)

//SECTION - Testing for the start
app.get("/", (req, res) => {
  res.send("Hello Odisha Heritage explorer")
})

//SECTION - import Routes
import healthCheckRouter from "./routes/healthCheck.route.js"
app.use("/api/v2/healthcheck", healthCheckRouter)

import authRouter from "./routes/auth.routes.js"
app.use("/api/v2/auth", authRouter)

export default app
