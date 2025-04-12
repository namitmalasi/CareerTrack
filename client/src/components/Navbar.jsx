import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Add Job", path: "/add-job" },
    { name: "Stats", path: "/stats" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600">JobTracker</h1>
      <ul className="flex gap-6 text-gray-700">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`hover:text-indigo-500 transition ${
                pathname === item.path ? "text-indigo-600 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
