// AuthMiddleware.js
const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyUser = async (req, res,next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.userId = decoded.id; // ✅ set user ID in request
    next();
  } catch (err) {
    return res.json({ status: false });
  }
};

module.exports = { verifyUser }; // use named export