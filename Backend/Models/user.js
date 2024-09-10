const mongoose = require("mongoose"); // Import UUID

const userSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    default: generateUniqueId, // Automatically generate a unique ID by default
    unique: true, // Ensure that uniqueId is unique across the collection
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true, 
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "manager", "user"],  
    required: true,
  },
}, { timestamps: true });

function generateUniqueId() {
  // This can be any logic for generating unique IDs, like using UUID or a unique string.
  return new mongoose.Types.ObjectId(); // Example using ObjectId
}

const User = mongoose.model("User", userSchema);
module.exports = User;