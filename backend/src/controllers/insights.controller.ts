import { Request, Response } from "express";
import { feedbacks } from "../models/feedback.model";
import { AuthRequest } from "../middlewares/auth.middleware";

export const getInsights = (req: AuthRequest, res: Response) => {
  const userFeedback = feedbacks.filter(
    f => f.userId === req.user.id
  );

  const total = userFeedback.length;

  const sourceCount: Record<string, number> = {};
  userFeedback.forEach(f => {
    sourceCount[f.source] = (sourceCount[f.source] || 0) + 1;
  });

  const themes = Object.entries(sourceCount).map(
    ([source, count], index) => ({
      id: index + 1,
      title: `${source} Feedback`,
      description: `${count} feedback items came from ${source}.`
    })
  );

  const summary =
    total === 0
      ? "No feedback received yet."
      : `You have received ${total} feedback items. The most common sources are ${Object.keys(sourceCount).join(", ")}.`;

  res.json({
    summary,
    themes
  });
};
