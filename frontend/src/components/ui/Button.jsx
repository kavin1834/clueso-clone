export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded bg-black text-white disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
