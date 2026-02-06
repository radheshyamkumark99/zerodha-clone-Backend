    const { Signup,Login } = require("../Controller/AuthController");
    const { verifyUser } = require("../Middleware/AuthMiddleware");
    const router = require("express").Router();
    const User = require("../model/UserModel");

    router.post("/Signup", Signup);
    router.post("/login", Login);
   router.get("/dashboard", verifyUser, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});


    module.exports = router;

// const express = require('express'); // ✅ Correct way
// const router = express.Router();

// const AuthController = require('../Controller/AuthController');

// router.post('/login', AuthController.login); // ✅ Make sure login is a function

// module.exports = router;