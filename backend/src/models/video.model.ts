export type VideoStatus = "UPLOADED" | "PROCESSING" | "READY" | "FAILED";

export interface Video {
  id: string;
  userId: string;
  title: string;
  description?: string;
  status: VideoStatus;
  createdAt: Date;
}

export const videos: Video[] = [];
