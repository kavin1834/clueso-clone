import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { users } from "../models/user.model";

export const getMe = (req: AuthRequest, res: Response) => {
  const userId = req.user.id;

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { password, ...safeUser } = user;
  res.json(safeUser);
};
