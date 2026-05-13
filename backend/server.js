require("dotenv").config()
const express = require("express")
const cors = require("cors")
const aiRoutes = require("./routes/aiRoutes")
const contactRoutes = require("./routes/contactRoutes")
const connectDB = require("./config/db")
const resumeRoutes = require("./routes/resumeRoutes")

const app = express()

connectDB()
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://uday-portfolio-sand.vercel.app/",
    ],
    credentials: true,
  })
)
app.use(express.json())
app.use("/api/ai", aiRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/resume", resumeRoutes)

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})