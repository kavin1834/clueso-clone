import { useEffect, useState } from "react";
import { getInsights } from "../../api/insights";
import Skeleton from "../../components/ui/Skeleton";
import InsightSummary from "../../components/insights/InsightSummary";
import InsightThemes from "../../components/insights/InsightThemes";

export default function Insights() {
  const [data, setData] = useState(null);

useEffect(() => {
  getInsights().then(setData);
}, []);


  if (!data) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Insights</h1>
        <Skeleton height="h-24" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Insights</h1>

      <InsightSummary summary={data.summary} />
      <div className="mt-6">
        <InsightThemes themes={data.themes} />
      </div>
    </div>
  );
}
