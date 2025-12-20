export interface Feedback {
  id: string;
  title: string;
  message: string;
  source: "Web" | "API" | "Extension";
  status: "New" | "Reviewed";
  userId: string;
  createdAt: string;
}

export const feedbacks: Feedback[] = [];
