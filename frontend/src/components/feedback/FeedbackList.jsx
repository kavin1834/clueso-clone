import { useEffect, useState } from "react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";
import EmptyState from "../ui/EmptyState";
import FeedbackDetail from "./FeedbackDetail";
import { getFeedback } from "../../api/feedback";


export default function FeedbackList() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

useEffect(() => {
  getFeedback()
    .then((data) => {
      setFeedbackData(data);
    })
    .catch(() => {
      setFeedbackData([]);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);


  if (loading) {
    return (
      <Card>
        <p className="text-gray-500">Loading feedback...</p>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <Card>
        <h2 className="text-xl font-semibold mb-4">
          Feedback List
        </h2>

        {feedbackData.length === 0 ? (
          <EmptyState
            title="No feedback yet"
            description="Feedback submitted by users will appear here."
          />
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-2 text-sm text-gray-500">Title</th>
                <th className="pb-2 text-sm text-gray-500">Source</th>
                <th className="pb-2 text-sm text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedFeedback(item)}
                >
                  <td className="py-3 font-medium">
                    {item.title}
                  </td>
                  <td className="py-3">
                    <Badge>{item.source}</Badge>
                  </td>
                  <td className="py-3">
                    <Badge>{item.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>

      <FeedbackDetail feedback={selectedFeedback} />

    </div>
  );
}
