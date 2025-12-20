export default function Onboarding() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Set up your workspace</h1>
        <input
          className="w-full p-2 border mb-4"
          placeholder="Workspace name"
        />
        <button className="bg-black text-white px-4 py-2 rounded">
          Continue
        </button>
      </div>
    </div>
  );
}
