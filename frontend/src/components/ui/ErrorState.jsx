export default function ErrorState({ message }) {
  return (
    <div className="border border-red-200 bg-red-50 p-4 rounded-md">
      <p className="text-red-600 font-medium">
        Something went wrong
      </p>
      <p className="text-sm text-red-500">
        {message}
      </p>
    </div>
  );
}
