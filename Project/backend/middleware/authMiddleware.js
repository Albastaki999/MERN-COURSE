import jwt from "jsonwebtoken"

function authMiddleware(req, res, next) {
  const token = req.cookies?.accessToken;

  if (!token) {
    return res.status(401).json({
      message: "Authentication required.",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: ["HS256"] }
    );

    req.userId = decoded.sub;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
}

export default authMiddleware;