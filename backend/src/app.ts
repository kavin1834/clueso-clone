import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import healthRoutes from "./routes/health.route";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import videoRoutes from "./routes/video.route";
import path from "path";
import feedbackRoutes from "./routes/feedback.route";
import insightsRoutes from "./routes/insights.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use("/api/feedback", feedbackRoutes);
app.use("/api/insights", insightsRoutes);


export default app;
