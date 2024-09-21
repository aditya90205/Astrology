import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MyLogo</div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="https://6aaccc-e0.myshopify.com/" className="text-white hover:text-gray-300">
            Shopify
          </a>
          <Link to={'/astrology-consultation'} className="text-white hover:text-gray-300">
            Astrology Consultation
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
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
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
            About
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
            Services
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
