import Card from "../ui/Card";
import Button from "../ui/Button";

export default function DangerZone() {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-red-600 mb-4">
        Danger Zone
      </h2>

      <p className="text-gray-600 mb-4">
        Deleting a workspace is irreversible. All data will be lost.
      </p>

      <Button disabled className="bg-red-600 text-white">
        Delete Workspace
      </Button>

      <p className="text-sm text-gray-500 mt-2">
        This action is disabled for demo purposes.
      </p>
    </Card>
  );
}
