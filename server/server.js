import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

import connectDB from "./config/db.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
// routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running!!!");
  connectDB();
});
