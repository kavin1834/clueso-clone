import Card from "../ui/Card";

export default function InsightSummary({ summary }) {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-2">
        AI Insights Summary
      </h2>

      <p className="text-gray-700 mb-2">
        {summary}
      </p>

      <p className="text-sm text-gray-500 italic">
        AI responses are mocked for UI validation purposes.
      </p>
    </Card>
  );
}
