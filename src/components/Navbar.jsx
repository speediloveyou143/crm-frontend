import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Navigation links array
  const navLinks = [
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 py-2" : "bg-gray-900 py-1"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200"
            >
              JHC CRM
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-white text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signin"
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              Get Started
            </Link>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1 hover:bg-gray-700 transition-all duration-200"
              >
                <FaUserCircle />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg z-50 transform transition-all duration-200 ease-in-out animate-dropdown">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-t-md transition-colors duration-150"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/signout"
                    className="block px-4 py-2 text-gray-200 hover:bg-red-500 hover:text-white rounded-b-md transition-colors duration-150"
                  >
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-gray-900`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <div className="border-t border-gray-800 mt-2">
          <Link to="/signin" className="block px-4 py-2 text-gray-300 hover:text-white">
            Sign In
          </Link>
          <Link to="/signup" className="block px-4 py-2 text-white bg-blue-600 text-center">
            Get Started
          </Link>
          <Link to="/dashboard" className="block px-4 py-2 text-gray-300 hover:text-white">
            Dashboard
          </Link>
          <Link to="/signout" className="block px-4 py-2 text-gray-300 hover:text-white">
            Sign Out
          </Link>
        </div>
      </div>
    </nav>
  );
}