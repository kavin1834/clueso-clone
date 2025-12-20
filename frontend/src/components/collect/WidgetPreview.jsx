import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { createFeedback } from "../../api/feedback";

export default function WidgetPreview() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    if (!message.trim()) return;

    setStatus("Submitting...");

    try {
      await createFeedback({
        title: "Widget Feedback",
        message,
        source: "Web",
      });

      setMessage("");
      setStatus("Feedback submitted ✅");
    } catch (err) {
      setStatus("Submission failed ❌");
    }
  };

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-2">
        Feedback Widget Preview
      </h2>

      <p className="text-gray-600 mb-4">
        This is a preview of the feedback widget.
      </p>

      <div className="border rounded-md p-4 mb-4 bg-gray-50">
        <p className="font-medium mb-2">Send us your feedback</p>

        <textarea
          className="w-full border rounded-md p-2 mb-2"
          placeholder="Type your feedback..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button onClick={handleSubmit}>
          Submit
        </Button>

        {status && (
          <p className="text-sm text-gray-500 mt-2">
            {status}
          </p>
        )}
      </div>
    </Card>
  );
}
