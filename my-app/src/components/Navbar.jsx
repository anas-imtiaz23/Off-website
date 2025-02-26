// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import React, { useState } from "react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full bg-orange-600 text-white h-20 px-8 flex justify-between items-center shadow-lg z-40">
//       {/* Social Media Links */}
//       <div className="flex space-x-4">
//         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//           <FaFacebook className="text-2xl hover:text-gray-400" />
//         </a>
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//           <FaInstagram className="text-2xl hover:text-gray-400" />
//         </a>
//         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin className="text-2xl hover:text-gray-400" />
//         </a>
//         <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//           <FaYoutube className="text-2xl hover:text-gray-400" />
//         </a>
//       </div>

//       {/* Hamburger Menu for Mobile */}
//       <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <AiOutlineClose className="text-3xl" /> : <AiOutlineMenu className="text-3xl" />}
//       </div>

//       {/* Navigation Links (Hidden on Mobile, Flex on Medium+) */}
//       <div className="hidden md:flex space-x-8 text-lg">
//         <a href="/" className="hover:text-gray-400">Home</a>
//         <a href="/review" className="hover:text-gray-400">Reviews</a>
//         <a href="/about" className="hover:text-gray-400">About Us</a>
//         <a href="/service" className="hover:text-gray-400">Services</a>
//         <a href="/login" className="hover:text-gray-400">Login</a>
//         <a href="/singup" className="hover:text-gray-400">Sign Up</a>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-20 left-0 w-full bg-orange-600 text-white flex flex-col items-center space-y-6 py-6 md:hidden z-50">
//           <a href="/" className="hover:text-gray-400">Home</a>
//           <a href="/review" className="hover:text-gray-400">Reviews</a>
//           <a href="/about" className="hover:text-gray-400">About Us</a>
//           <a href="/service" className="hover:text-gray-400">Services</a>
//           <a href="/login" className="hover:text-gray-400">Login</a>
//           <a href="/singup" className="hover:text-gray-400">Sign Up</a>
//         </div>
//       )}
//     </nav>
//   );
// }

// export { Navbar };
// export default Navbar;
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in by verifying if a token exists
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsAuthenticated(!!token);
  }, []);

  // Handle logout: remove token and redirect user
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home page or login page
  };

  return (
    <nav className="w-full bg-orange-600 text-white h-20 px-8 flex justify-between items-center shadow-lg z-40 relative">
      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-2xl hover:text-gray-400" />
        </a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose className="text-3xl" /> : <AiOutlineMenu className="text-3xl" />}
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex space-x-8 text-lg">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/review" className="hover:text-gray-400">Reviews</a>
        <a href="/about" className="hover:text-gray-400">About Us</a>
        <a href="/service" className="hover:text-gray-400">Services</a>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="hover:text-gray-400 focus:outline-none"
          >
            Logout
          </button>
        ) : (
          <>
            <a href="/login" className="hover:text-gray-400">Login</a>
            <a href="/singup" className="hover:text-gray-400">Sign Up</a>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-orange-600 text-white flex flex-col items-center space-y-6 py-6 md:hidden z-50">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/review" className="hover:text-gray-400">Reviews</a>
          <a href="/about" className="hover:text-gray-400">About Us</a>
          <a href="/service" className="hover:text-gray-400">Services</a>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="hover:text-gray-400 focus:outline-none"
            >
              Logout
            </button>
          ) : (
            <>
              <a href="/login" className="hover:text-gray-400">Login</a>
              <a href="/singup" className="hover:text-gray-400">Sign Up</a>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
