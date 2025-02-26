// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const enrollmentSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 3,
//       maxlength: 50,
//     },
//     fatherName: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 3,
//       maxlength: 50,
//     },
//     city: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 3,
//       maxlength: 50,
//     },
//     eligibility: {
//       type: String,
//       required: true,
//       enum: ['online', 'physical'], // Ensures only these values are accepted
//     },
//     educationalStatus: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 3,
//       maxlength: 100,
//     },
//     age: {
//       type: Number,
//       required: true,
//       min: 1, // Ensures age is a positive number
//       max: 120, // Optional: Set a reasonable maximum age
//     },
//     course: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 3,
//       maxlength: 100,
//     },
//     gender: {
//       type: String,
//       required: true,
//       enum: ['male', 'female'], // Ensures only these values are accepted
//     },
//   },
//   { timestamps: true } // Automatically adds 'createdAt' and 'updatedAt'
// );

// // Create an index for better query performance (optional)
// enrollmentSchema.index({ name: 1 });

// const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
// module.exports = Enrollment;
// Enrollment.js
import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    fatherName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    eligibility: {
      type: String,
      required: true,
      enum: ['online', 'physical'], // Ensures only these values are accepted
    },
    educationalStatus: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    age: {
      type: Number,
      required: true,
      min: 1, // Ensures age is a positive number
      max: 120, // Optional: Set a reasonable maximum age
    },
    course: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female'], // Ensures only these values are accepted
    },
  },
  { timestamps: true } // Automatically adds 'createdAt' and 'updatedAt'
);

// Create an index for better query performance (optional)
enrollmentSchema.index({ name: 1 });

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

export default Enrollment; // Use export default for ES Modules