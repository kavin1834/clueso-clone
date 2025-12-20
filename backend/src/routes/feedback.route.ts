import { Router } from "express";
import { createFeedback, getFeedback } from "../controllers/feedback.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authMiddleware, createFeedback);
router.get("/", authMiddleware, getFeedback);

export default router;
