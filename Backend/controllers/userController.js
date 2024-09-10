const User = require('../Models/user'); // Ensure correct import
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Controller for signup user
const signupUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body; 

    // Check if user already registered
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });
    await user.save();

    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: error.message || 'Error registering user' });
  }
};

// Controller for login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Ensure JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not defined');
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      token,
      userRole: user.role,  // Consistent naming with frontend
      userId: user._id,
      message: 'Login successful'
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: error.message || 'Error logging in' });
  }
};


module.exports = { signupUser, loginUser };
