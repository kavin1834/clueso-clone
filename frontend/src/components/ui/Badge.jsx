export default function Badge({ children }) {
  return (
    <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
      {children}
    </span>
  );
}
