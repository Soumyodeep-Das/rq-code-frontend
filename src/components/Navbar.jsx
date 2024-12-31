import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">RQ Codes</Link>
        </div>
        <div className="space-x-5 font-semibold text-lg">
          <Link
            to="/"
            className="hover:text-blue-200 transition"
          >
            Home
          </Link>
          {/* <Link
            to="/profile"
            className="hover:text-blue-200 transition"
          >
            Profile
          </Link> */}
          {/* <Link
            to="/settings"
            className="hover:text-blue-200 transition"
          >
            Settings
          </Link> */}
          <Link
            to="/login"
            className="hover:text-blue-200 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hover:text-blue-200 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
