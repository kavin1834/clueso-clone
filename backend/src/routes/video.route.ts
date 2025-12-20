import { Router } from "express";
import { createVideo, getMyVideos } from "../controllers/video.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { upload } from "../utils/multer";
import { uploadVideo } from "../controllers/video.controller";

const router = Router();

router.post("/", authMiddleware, createVideo);
router.get("/", authMiddleware, getMyVideos);
router.post(
  "/:id/upload",
  authMiddleware,
  upload.single("video"),
  uploadVideo
);

export default router;
