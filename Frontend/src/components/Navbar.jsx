import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const updateLoginStatus = () => setIsLoggedIn(!!localStorage.getItem("authToken"));
  
    // Initial check
    updateLoginStatus();
  
    // Listen for storage changes
    window.addEventListener("storage", updateLoginStatus);
  
    return () => window.removeEventListener("storage", updateLoginStatus);
  }, []);
  

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyLogo</div>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="https://6aaccc-e0.myshopify.com/" className="text-white hover:text-gray-300">Shopify</a>
          <Link to="/astrology-consultation" className="text-white hover:text-gray-300">Astrology Consultation</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
          ) : (
            <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block px-4 py-2 text-white hover:bg-gray-700">Home</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">About</a>
          <a href="https://6aaccc-e0.myshopify.com/" className="block px-4 py-2 text-white hover:bg-gray-700">Shopify</a>
          <Link to="/astrology-consultation" className="block px-4 py-2 text-white hover:bg-gray-700">Astrology Consultation</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700">Logout</button>
          ) : (
            <Link to="/login" className="block px-4 py-2 text-white hover:bg-gray-700">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
