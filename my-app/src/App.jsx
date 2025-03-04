// import React from "react";
// import Navbar from "./components/Navbar";
// import HomePage from "./components/HomePage";
// import Thought from "./components/Thought";
// // import EnrollForm from "./components/Enroll_form";
// function App() {
//   return (
//     <>
//     <Navbar />
//     <HomePage />
//     <Thought />
//     </>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import EnrollForm from "./components/Enroll_form";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/footer";
import AboutUs from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <Router> {/* Wrap the whole app */}
    <Navbar />
      <Routes>
      {/* <Route path="/" element={<Navbar /> } /> */}
      <Route path="/" element={<><HomePage/><Reviews /><Services /></>} /> {/* Default route */}
        <Route path="/" element={<HomePage /> } />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/form" element={<EnrollForm />} /> */}
        <Route path="/form" element={<EnrollForm />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/service" element={<Services />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/singup" element={<Signup />} /> */}
        {/* <Route path="/enroll" element={<EnrollForm />} /> */}
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
