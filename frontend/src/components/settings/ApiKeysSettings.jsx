import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function ApiKeysSettings() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        API Keys
      </h2>

      <div className="flex items-center gap-3">
        <Badge>Active</Badge>
        <code className="bg-gray-100 px-3 py-1 rounded-md text-sm">
          clus_live_abcdef123456
        </code>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        API keys are shown for UI demonstration only.
      </p>
    </Card>
  );
}
