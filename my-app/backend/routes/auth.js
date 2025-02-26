// // auth.js
// import express from 'express';
// const router = express.Router();

// // Define your routes here
// router.post('/register', (req, res) => {
//     res.send('user register successfully');
// });

// // Export the router as the default export
// export default router;
import express from 'express';
// import Enrollment from '../models/Enrollment.js'; // Adjust the path as necessary
import Enrollment from '../modals/Enrollment.js';
import User from '../modals/User.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const router = express.Router();

// Route to handle form submission
router.post('/enroll', async (req, res) => {
  try {
    // Create a new enrollment document using the request body
    const enrollment = new Enrollment(req.body);

    // Save the document to the database
    await enrollment.save();

    // Send a success response
    res.status(201).json({ message: 'Enrollment successful', enrollment });
  } catch (error) {
    // Handle errors
    res.status(400).json({ message: 'Enrollment failed', error: error.message });
  }
});
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body; // <-- Ensure this works

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    res.status(201).json({ msg: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);  // Log the actual error
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
export default router;