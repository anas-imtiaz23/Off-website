// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("http://localhost:3000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Login failed");
//       }

//       const data = await response.json();
//       console.log("Login successful:", data);
//       // Store the JWT token in localStorage (or your preferred storage)
//       localStorage.setItem("userToken", data.token);

//       // Redirect to the enrollment form page on successful login
//       navigate("/form");
//     } catch (err) {
//       console.error("Login error:", err);
//       // Display error message and redirect to signup after 3 seconds
//       setError("You don't have an account. Please sign up first.");
//       setTimeout(() => {
//         navigate("/signup");
//       }, 3000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//           Login
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
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
//           {error && (
//             <p className="text-red-500 text-sm text-center">{error}</p>
//           )}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-blue-600 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("http://localhost:3000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Login failed");
//       }

//       const data = await response.json();
//       console.log("Login successful:", data);
//       // Store the JWT token in localStorage (or your preferred storage)
//       localStorage.setItem("userToken", data.token);

//       // Redirect to the enrollment form page on successful login
//       navigate("/form");
//     } catch (err) {
//       console.error("Login error:", err);
//       // Display error message and redirect to signup after 3 seconds
//       setError("You don't have an account. Please sign up first.");
//       setTimeout(() => {
//         navigate("/signup");
//       }, 3000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/log.jpg')" }}
//     >
//       <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//           Login
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
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
//           {error && (
//             <p className="text-red-500 text-sm text-center">{error}</p>
//           )}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-blue-600 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login successful:", data);
      // Store the JWT token in localStorage
      localStorage.setItem("userToken", data.token);

      // Redirect to the enrollment form page on successful login
      navigate("/form");
    } catch (err) {
      console.error("Login error:", err);
      // Display error message and redirect to signup after 3 seconds
      setError("You don't have an account. Please sign up first.");
      setTimeout(() => {
        navigate("/signup");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/log.jpg')" }}
    >
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
