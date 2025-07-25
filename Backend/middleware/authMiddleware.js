const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // Get the token from the header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: 'Access Denied: No token provided' });

  try {
    // Verify token
    const secret = process.env.JWT_SECRET || 'your_jwt_secret';
    const verified = jwt.verify(token, secret);
    req.user = verified; // attach the user payload to the request
    next(); // proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: 'Invalid Token' });
  }
};

module.exports = authenticateToken;
