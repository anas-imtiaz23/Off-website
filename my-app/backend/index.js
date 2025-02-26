// // index.js
// import express from 'express';
// import authRoutes from './routes/auth.js';
// import connectDB from './db.js'; // Import the database connection function

// const app = express();

// // Connect to the database
// connectDB();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Use the auth routes
// app.use('/api/auth', authRoutes);

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
import express from 'express';
import cors from 'cors'; // Import the cors middleware
import authRoutes from './routes/auth.js';
import connectDB from './db.js';

const app = express();

// Connect to the database
connectDB();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});