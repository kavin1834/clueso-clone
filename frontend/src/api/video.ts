import api from "./axios";

export const createVideo = async (title: string, description?: string) => {
  const res = await api.post("/videos", { title, description });
  return res.data;
};

export const getMyVideos = async () => {
  const res = await api.get("/videos");
  return res.data;
};

export const uploadVideo = async (videoId: string, file: File) => {
  const formData = new FormData();
  formData.append("video", file);

  const res = await api.post(
    `/videos/${videoId}/upload`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return res.data;
};
