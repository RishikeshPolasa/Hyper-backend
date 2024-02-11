import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

// Indexing
userSchema.index({ username: 1, email: 1, phone: 1 });

// Create and export the User model
const User = mongoose.model("User", userSchema);

export { User, userSchema };
