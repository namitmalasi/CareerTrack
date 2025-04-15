import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const tokenExists = document.cookie.includes("token=");
  //   setIsLoggedIn(tokenExists);
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     await fetch("http://localhost:5000/api/auth/logout", {
  //       method: "POST",
  //       credentials: "include",
  //     });
  //     setIsLoggedIn(false);
  //     navigate("/login");
  //   } catch (err) {
  //     console.error("Logout failed:", err);
  //   }
  // };

  const handleLogout = () => {
    logout(); // clear user from context
    navigate("/login");
  };
  return (
    <nav className="bg-white shadow-md p-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-extrabold text-blue-600">
        JobTrackr
      </Link>
      <div className="space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        {!user ? (
          <>
            <Link to="/register" className="hover:text-blue-500 transition">
              Register
            </Link>
            <Link to="/login" className="hover:text-blue-500 transition">
              Login
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:text-blue-500 transition">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
