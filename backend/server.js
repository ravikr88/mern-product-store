import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";

const app = express();

app.get("/products", (req, res) => {
  res.send("server is ready");
});

// Connect to DB first
const startServer = async () => {
  try {
    await connectDB(); // wait for DB connection
    app.listen(5050, () => {
      console.log("Server live on http://localhost:5050");
    });
  } catch (err) {
    console.error("Failed to connect to DB", err);
    process.exit(1); // exit if DB connection fails
  }
};

startServer();
