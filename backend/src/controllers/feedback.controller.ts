import { Response } from "express";
import { feedbacks, Feedback } from "../models/feedback.model";
import { AuthRequest } from "../middlewares/auth.middleware";

export const createFeedback = (req: AuthRequest, res: Response) => {
  const { title, message, source } = req.body;

  if (!title || !message || !source) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const feedback: Feedback = {
    id: Date.now().toString(),
    title,
    message,
    source,
    status: "New",
    userId: req.user.id,
    createdAt: new Date().toISOString(),
  };

  feedbacks.push(feedback);

  res.status(201).json(feedback);
};

export const getFeedback = (req: AuthRequest, res: Response) => {
  const userFeedback = feedbacks.filter(
    f => f.userId === req.user.id
  );

  res.json(userFeedback);
};
