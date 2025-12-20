import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function ApiKeyCard() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-2">
        API Access
      </h2>

      <p className="text-gray-600 mb-3">
        Use this API key to submit feedback programmatically from your backend.
      </p>

      <div className="flex items-center gap-2">
        <Badge>API Key</Badge>
        <code className="bg-gray-100 px-3 py-1 rounded-md text-sm">
          clus_live_1234567890abcdef
        </code>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        This API key is fake and shown for UI demonstration only.
      </p>
    </Card>
  );
}
