import React, { useState } from "react";
import { GoTasklist } from "react-icons/go";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <GoTasklist className="w-8 h-8 text-slate-300" />
            <span className="ml-2 text-xl font-semibold text-slate-300">
              GoTaskList
            </span>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-slate-300 hover:text-white transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition duration-300"
            >
              Tasks
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition duration-300"
            >
              Profile
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-black transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block text-slate-300 hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-slate-300 hover:text-white transition duration-300"
          >
            Tasks
          </a>
          <a
            href="#"
            className="block text-slate-300 hover:text-white transition duration-300"
          >
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;