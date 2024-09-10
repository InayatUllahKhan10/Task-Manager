// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Assumes Bearer token format

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
              console.log("Error in token verification");
              
              return res.status(403).json({ message: 'Invalid token.' });}
            req.user = user; // Attach user info to req object
            next();
        });
    } else {
        res.status(401).json({ message: 'Access token required.' });
    }
};

module.exports = { authenticateJWT };
