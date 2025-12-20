import api from "./axios";

export const getFeedback = async () => {
  const res = await api.get("/feedback");
  return res.data;
};

export const createFeedback = async (data: {
  title: string;
  message: string;
  source: "Web" | "API" | "Extension";
}) => {
  const res = await api.post("/feedback", data);
  return res.data;
};
