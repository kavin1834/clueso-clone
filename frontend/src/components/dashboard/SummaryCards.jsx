// Import the reusable Card component
import Card from "../ui/Card";

// SummaryCards component
export default function SummaryCards() {
  return (
    // Grid container for 3 cards
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      {/* Total Feedback Card */}
      <Card>
        <p className="text-sm text-gray-500">Total Feedback</p>
        <h2 className="text-3xl font-bold">120</h2>
      </Card>

      {/* Insights Card */}
      <Card>
        <p className="text-sm text-gray-500">Insights</p>
        <h2 className="text-3xl font-bold">35</h2>
      </Card>

      {/* Open Issues Card */}
      <Card>
        <p className="text-sm text-gray-500">Open Issues</p>
        <h2 className="text-3xl font-bold">8</h2>
      </Card>

    </div>
  );
}
