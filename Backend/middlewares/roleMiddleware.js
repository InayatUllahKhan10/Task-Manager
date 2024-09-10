// middlewares/roleMiddleware.js
const roleMiddleware = (roles) => {
    return (req, res, next) => {
        const userRole = req.user?.role;

        if (roles.includes(userRole)) {
            return next(); // User has the correct role, continue to the next middleware or route handler
        } else {
            return res.status(403).json({ message: 'Access denied.' }); // Forbidden access
        }
    };
};

module.exports = roleMiddleware;
