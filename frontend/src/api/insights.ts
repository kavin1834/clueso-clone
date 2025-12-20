import api from "./axios";

export const getInsights = async () => {
  const res = await api.get("/insights");
  return res.data;
};
