const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

// Config file
dotenv.config({ path: "./config/.env" });

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Routes import
const infoRoutes = require("./routes/infoRoute"); // Ensure file exists

app.use("/", infoRoutes); // Use info route for "/"



module.exports = app;