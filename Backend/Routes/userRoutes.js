const router = require("express").Router();
const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.get('/signup',(req,res)=>{
  res.send('this is signup form')
})
router.get('/login',(req,res)=>{
  res.send('this is login form')
})
router.get('/logout',(req,res)=>{
  res.send('this is logout form')
})

// Sign-in API
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate username length
    if (username.length < 4) {
      return res.status(400).json({ message: "Username must have at least 4 characters" });
    }

    // Check if user or email already exists
    const existingUser = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Validate role (should be one of "admin", "user", "manager")
    const validRoles = ["admin", "user", "manager"];
    if (role && !validRoles.includes(role)) {
      return res.status(400).json({ message: "Invalid role. Role must be 'admin', 'user', or 'manager'" });
    }

    // Hash password
    const hashPass = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      role: role || "user", // Default to "user" if role is not provided
      password: hashPass,
    });

    await newUser.save();
    return res.status(200).json({ message: "Sign-in successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Log-in API
router.post("/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if the role matches
    if (user.role !== role) {
      return res.status(403).json({ message: "Access denied. Incorrect role." });
    }

    // Create JWT token with user details
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET
    );

    // Set the JWT token in cookies for further requests
    res.cookie('token', token, { httpOnly: true });

    // Redirect the user based on their role
    const redirectUrl = {
      'admin': '/dashboard',
      'manager': '/dashboard',
      'user': '/dashboard/user',
    }[user.role] || '/';

    res.json({ message: "Login successful", redirectUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;