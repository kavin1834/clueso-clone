// Import feedback inbox components
import FeedbackFilters from "../../components/feedback/FeedbackFilters";
import FeedbackList from "../../components/feedback/FeedbackList";
import ErrorState from "../../components/ui/ErrorState";

// Feedback Inbox page
export default function FeedbackInbox() {
  // Mock error flag (UI only)
  const hasError = false;

  return (
    <div className="p-6">

      {/* Page title */}
      <h1 className="text-2xl font-bold mb-6">
        Feedback Inbox
      </h1>

      {/* Filters section */}
      <FeedbackFilters />

      {/* Error placeholder */}
      {hasError && (
        <ErrorState message="Unable to load feedback. Please try again later." />
      )}

      {/* Feedback list section */}
      {!hasError && <FeedbackList />}

    </div>
  );
}
