import Badge from "../ui/Badge";
import Card from "../ui/Card";

export default function FeedbackDetail({ feedback }) {
  if (!feedback) return null;

  return (
    <Card>
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-1">
          {feedback.title}
        </h2>

        <div className="flex gap-4 text-sm text-gray-500">
          <span>
            Date: {new Date(feedback.createdAt).toLocaleDateString()}
          </span>
          <span>Source: {feedback.source}</span>
        </div>
      </div>

      {/* Status */}
      <div className="mb-4">
        <h3 className="block text-sm font-medium mb-1">
          Status
        </h3>
        <Badge>{feedback.status}</Badge>
      </div>

      {/* Message */}
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Message</h3>
        <p className="text-gray-700">
          {feedback.message}
        </p>
      </div>

      {/* AI Summary (Mocked but valid) */}
      <div className="border-t pt-4">
        <h3 className="font-semibold mb-1">
          AI Summary
        </h3>
        <p className="text-gray-600">
          This feedback highlights a user concern that may
          impact overall product experience.
        </p>
      </div>
    </Card>
  );
}
