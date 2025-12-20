import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { videos, Video } from "../models/video.model";

export const createVideo = (req: AuthRequest, res: Response) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newVideo: Video = {
    id: Date.now().toString(),
    userId: req.user.id,
    title,
    description,
    status: "UPLOADED",
    createdAt: new Date()
  };

  videos.push(newVideo);

  res.status(201).json(newVideo);
};

export const getMyVideos = (req: AuthRequest, res: Response) => {
  const myVideos = videos.filter(v => v.userId === req.user.id);
  res.json(myVideos);
};

export const uploadVideo = (req: AuthRequest, res: Response) => {
  const videoId = req.params.id;

  const video = videos.find(
    v => v.id === videoId && v.userId === req.user.id
  );

  if (!video) {
    return res.status(404).json({ message: "Video not found" });
  }

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  video.status = "PROCESSING";

  // simulate background processing
  processVideo(video.id);

  res.json({
    message: "Video uploaded successfully",
    status: video.status
  });
};

// background simulation
export const processVideo = (videoId: string) => {
  setTimeout(() => {
    const video = videos.find(v => v.id === videoId);
    if (video) {
      video.status = "READY";
      console.log(`Video ${video.id} processed → READY`);
    }
  }, 5000);
};
