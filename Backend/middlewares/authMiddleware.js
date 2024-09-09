const jwt=require('jsonwebtoken')
const User=require('../Models/user')

const protectRoute = async (req, res, next) => {
  try {
    let token = req.cookies?.token;

    if (token) {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const resp = await User.findById(decodedToken.userId).select("role email");

      req.user = {
        email: resp.email,
        role: resp.role,
        userId: decodedToken.userId,
      };

      next();
    } else {
      return res
        .status(401)
        .json({ status: false, message: "Not authorized. Try login again." });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ status: false, message: "Not authorized. Try login again." });
  }
};

  
const roleBasedAccess = (requiredRoles) => {
  return (req, res, next) => {
    if (!req.user || !requiredRoles.includes(req.user.role)) {
      return res.status(403).json({
        status: false,
        message: "Access forbidden: Insufficient permissions."
      });
    }
    next();
  }
  };
  
  module.exports= { roleBasedAccess, protectRoute };
  