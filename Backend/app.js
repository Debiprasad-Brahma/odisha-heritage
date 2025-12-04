import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//* Basic configurations
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

//* cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
)

//* Testing for the start
app.get("/", (req, res) => {
  res.send("Hello Odisha Heritage explorer")
})

//* import Routes
import healthCheckRouter from "./routes/healthCheck.route.js"
app.use("/api/v1/healthcheck", healthCheckRouter)

export default app
