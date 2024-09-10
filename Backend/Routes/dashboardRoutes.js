// routes/dashboard.js
const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Apply authentication and role-based middleware
router.get('/dashboard', authenticateJWT, roleMiddleware(['admin', 'manager']), (req, res) => {
    res.json({ message: 'Welcome to the dashboard!' });
});
router.get('/userhome', authenticateJWT, roleMiddleware(['user']), (req, res) => {
  res.json({ message: 'Welcome to the dashboard!' });
});

module.exports = router;
