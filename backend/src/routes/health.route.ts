import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is healthy 🚀"
  });
});

export default router;
