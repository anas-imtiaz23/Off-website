// import React from "react";
// const Footer = () => {
//     return (
//       <footer className="bg-gray-900 text-white py-10">
//         <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//           {/* Logo and Description */}
//           <div>
//             <h2 className="text-2xl font-bold">Your Brand</h2>
//             <p className="text-gray-400 mt-2">
//               Creating the best experiences with quality and innovation.
//             </p>
//           </div>
  
//           {/* Navigation Links */}
//           <div>
//             <h3 className="text-xl font-semibold">Quick Links</h3>
//             <ul className="mt-2 space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
//             </ul>
//           </div>
  
//           {/* Social Media Links */}
//           <div>
//             <h3 className="text-xl font-semibold">Follow Us</h3>
//             <div className="flex justify-center md:justify-start gap-4 mt-2">
//               <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
//               <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter"></i></a>
//               <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram"></i></a>
//               <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//           </div>
//         </div>
  
//         {/* Copyright Section */}
//         <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
//           &copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">Your Brand</h2>
          <p className="text-gray-400 mt-2">
            Creating the best experiences with quality and innovation.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
            <li><a href="/service" className="text-gray-400 hover:text-white transition">Services</a></li>
            <li><a href="/review" className="text-gray-400 hover:text-white transition">Reviews</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
