// Create Database Schema and model for users
const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     studentID: Number,
//     name: { type: String, required: true },
//     password: { type: String },
//     age: { type: Number },
//     level: String,
//     program: String
// });

const UserSchema = new mongoose.Schema({
  patientID: Number,
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  DOB: { type: String },
  contact: { type: String, required: true },
  resAddress: { type: String, required: true },
});

// Model for the schema
const User = mongoose.model("User", UserSchema);

module.exports = User;
