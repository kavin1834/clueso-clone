import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/app/dashboard" },
  { name: "Upload", path: "/app/upload" }, 
  { name: "Feedback", path: "/app/feedback" },
  { name: "Insights", path: "/app/insights" },
  { name: "Collect", path: "/app/collect" },
  { name: "Settings", path: "/app/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-100">
        <span className="font-bold text-xl">Clueso</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Main Navigation">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2.5 rounded-lg ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
