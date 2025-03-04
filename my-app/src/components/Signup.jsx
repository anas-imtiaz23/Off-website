// import { useState } from "react";
// import React from "react";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:3000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert("Signup successful!");
//       } else {
//         alert(data.msg || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-600">Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Already have an account? <a href="#" className="text-blue-600 hover:underline">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
// import { useState } from "react";
// import React from "react";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:3000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert("Signup successful!");
//       } else {
//         alert(data.msg || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/signup..jpg')" }}
//     >
//       <div className="w-full max-w-md p-8 bg-blue rounded-2xl shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-white mb-6">
//           Sign Up
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-white">Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-white">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-white">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-600 hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
// import { useState } from "react";
// import React from "react";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:3000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert("Signup successful!");
//       } else {
//         alert(data.msg || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/signup..jpg')" }}
//     >
//       <div className="w-full max-w-md p-8 bg-blue rounded-2xl shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-white mb-6">
//           Sign Up
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-white">Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 mt-1 border border-white text-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-white">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 mt-1 border border-white text-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-white">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 mt-1 border border-white text-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-300">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-300 hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

//export default Signup;
//  for Testing purpose
import { useState } from "react";
import React from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful!");
      } else {
        alert(data.msg || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/signup.jpg')" }}
    >
      <div className="w-full max-w-md p-8 bg-blue rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border border-white text-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border border-white text-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-white">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border border-white text-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-300">
          Already have an account?{" "}
          <a href="/login" className="text-blue-300 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

