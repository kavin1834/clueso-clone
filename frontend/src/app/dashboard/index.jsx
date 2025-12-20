// Import dashboard components
import SummaryCards from "../../components/dashboard/SummaryCards";
import RecentFeedback from "../../components/dashboard/RecentFeedback";

// Dashboard page
export default function Dashboard() {
  return (
    // Page container
    <div className="p-6">

      {/* Page title */}
      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      {/* Stats cards section */}
      <SummaryCards />

      {/* Recent feedback section */}
      <RecentFeedback />

    </div>
  );
}
