export default function SettingsTabs({ activeTab, setActiveTab }) {
  const tabs = ["Profile", "Workspace", "API Keys", "Danger Zone"];

  return (
    <div className="flex gap-4 border-b mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 font-medium ${
            activeTab === tab
              ? "border-b-2 border-black"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
