import Card from "../ui/Card";
import Button from "../ui/Button";

export default function ProfileSettings() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        Profile Settings
      </h2>

      <div className="space-y-4">
        <input
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Name"
          value="John Doe"
          disabled
        />

        <input
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Email"
          value="john@example.com"
          disabled
        />

        <Button disabled>
          Save Changes
        </Button>
      </div>
    </Card>
  );
}
