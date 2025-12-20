import { Router } from "express";
import { getInsights } from "../controllers/insights.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getInsights);

export default router;
