import Card from "../ui/Card";

export default function WorkspaceSettings() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        Workspace
      </h2>

      <p className="text-gray-600 mb-2">
        Workspace Name
      </p>

      <input
        className="border rounded-md px-3 py-2 w-full mb-4"
        value="Clueso Demo Workspace"
        disabled
      />

      <p className="text-sm text-gray-500">
        Workspace settings are mocked for UI demonstration.
      </p>
    </Card>
  );
}
