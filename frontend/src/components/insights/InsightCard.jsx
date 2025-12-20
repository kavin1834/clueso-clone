import Card from "../ui/Card";

export default function InsightCard({ title, description }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </Card>
  );
}
