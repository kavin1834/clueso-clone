export default function EmptyState({ title, description }) {
  return (
    <div className="text-center py-10">
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-500">
        {description}
      </p>
    </div>
  );
}
