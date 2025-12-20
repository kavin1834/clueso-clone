// Import reusable UI components
import Card from "../ui/Card";
import Badge from "../ui/Badge";

// Dummy recent feedback data (last 5 items)
const recentFeedback = [
  {
    id: 1,
    message: "Login page loads slowly",
    status: "Open",
    date: "2025-03-10",
  },
  {
    id: 2,
    message: "Add dark mode support",
    status: "Open",
    date: "2025-03-09",
  },
  {
    id: 3,
    message: "Profile update fails sometimes",
    status: "Closed",
    date: "2025-03-08",
  },
  {
    id: 4,
    message: "Improve dashboard UI",
    status: "Closed",
    date: "2025-03-07",
  },
  {
    id: 5,
    message: "Email notifications not sent",
    status: "Open",
    date: "2025-03-06",
  },
];

// RecentFeedback component
export default function RecentFeedback() {
  return (
    // Card wrapper
    <Card>
      {/* Section title */}
      <h2 className="text-xl font-semibold mb-4">
        Recent Feedback
      </h2>

      {/* Feedback table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="pb-2 text-sm text-gray-500">Feedback</th>
            <th className="pb-2 text-sm text-gray-500">Status</th>
            <th className="pb-2 text-sm text-gray-500">Date</th>
          </tr>
        </thead>

        <tbody>
          {recentFeedback.map((item) => (
            <tr key={item.id} className="border-b last:border-b-0">
              <td className="py-3">
                {item.message}
              </td>

              <td className="py-3">
                <Badge>
                  {item.status}
                </Badge>
              </td>

              <td className="py-3 text-sm text-gray-500">
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
