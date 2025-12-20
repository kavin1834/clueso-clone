import Card from "../ui/Card";

export default function ExtensionInfo() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-2">
        Chrome Extension
      </h2>

      <p className="text-gray-600">
        The Clueso Chrome Extension allows users to submit feedback
        directly from any webpage. This is useful for capturing
        contextual feedback during real usage.
      </p>

      <p className="text-sm text-gray-500 mt-2">
        (Extension functionality is mocked for demonstration purposes.)
      </p>
    </Card>
  );
}
