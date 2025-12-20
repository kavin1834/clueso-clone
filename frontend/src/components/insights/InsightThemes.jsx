import InsightCard from "./InsightCard";

export default function InsightThemes({ themes }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {themes.map((theme) => (
        <InsightCard
          key={theme.id}
          title={theme.title}
          description={theme.description}
        />
      ))}
    </div>
  );
}
