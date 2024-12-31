import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-extrabold mb-5 text-center uppercase">
          Welcome to the <br /> World of <span className="text-violet-900"> Reuseable QR </span> Codes
        </h1>

        <p className="mb-6 text-lg text-gray-200 max-w-lg text-center">
          Generate, manage, and track your QR codes with ease. A seamless
          experience awaits you.
        </p>

        <div className="flex space-x-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg font-bold rounded-full shadow-md transition-transform transform hover:scale-110"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-lg font-bold rounded-full shadow-md transition-transform transform hover:scale-110"
          >
            Sign Up
          </Link>
        </div>

        <footer className="mt-16 text-md text-gray-200">
          Crafted with ♥ for seamless QR code experiences.
        </footer>
      </div>
    </div>
  );
};

export default Home;
