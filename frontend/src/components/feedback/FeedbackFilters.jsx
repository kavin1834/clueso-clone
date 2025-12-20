// FeedbackFilters component
export default function FeedbackFilters() {
  return (
    // Filters container
    <div className="flex flex-col md:flex-row gap-4 mb-6">

      {/* Status Filter */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Status
        </label>
        <select className="border rounded-md px-3 py-2 w-full md:w-48">
          <option>All</option>
          <option>New</option>
          <option>Reviewed</option>
        </select>
      </div>

      {/* Source Filter */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Source
        </label>
        <select className="border rounded-md px-3 py-2 w-full md:w-48">
          <option>All</option>
          <option>Web</option>
          <option>Extension</option>
          <option>API</option>
        </select>
      </div>

    </div>
  );
}
