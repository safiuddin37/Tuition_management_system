const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  console.log('Token:', token); 
  if (token) {
    jwt.verify(token, "your_secret_key", (err, user) => {
      if (err) {
        console.error('JWT verification error:', err); 
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    console.log('No token provided'); 
    res.sendStatus(401);
  }
};

const checkAttendancePermissions = (req, res, next) => {
  const userRole = req.user.role;
  if (userRole === "admin" || userRole === "teacher") {
    next();
  } else {
    res.status(403).json({ message: "Access denied" });
  }
};

module.exports = {
  authenticateJWT,
  checkAttendancePermissions,
};
