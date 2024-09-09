const express = require('express');
const { protectRoute, roleBasedAccess } = require('../middlewares/authMiddleware');

const router = express.Router();


// Admin dashboard route
router.get('/admin', protectRoute, roleBasedAccess(['admin']), (req, res) => {
  res.json({ message: "Welcome to the admin dashboard" });
});

// Project manager dashboard route
router.get('/', protectRoute, roleBasedAccess(['admin', 'manager']), (req, res) => {
  res.json({ message: "Welcome to the project manager dashboard" });
});

// Team member dashboard route
router.get('/user', protectRoute, roleBasedAccess(['admin', 'manager', 'user']), (req, res) => {
  res.json({ message: "Welcome to the team member dashboard" });
});

module.exports = router;