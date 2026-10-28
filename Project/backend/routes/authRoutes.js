import express from "express";
import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

function createToken(userId) {
  return jwt.sign({ sub: userId.toString() }, process.env.JWT_SECRET, {
    expiresIn: "20m",
  });
}

function setAuthCookie(res, token) {
  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 15 * 60 * 1000,
    path: "/",
  });
}

router.post("/register", async (req, res) => {
  try {
    const { username, fullName, password } = req.body;
    if (!username || !fullName || !password) {
      return res.status(400).json({ error: "Please enter required fields" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "A user with this username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      username,
      password: hashedPassword,
      fullName,
    });

    const token = createToken(user._id);
    setAuthCookie(res, token);

    await user.save();

    return res.status(201).json({ message: "User Created successfully" });
  } catch (e) {
    console.log(e);

    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const user = await User.findOne({ username });

    if (!user || (await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ error: "Either username/password is invalid" });
    }

    const token = createToken(user._id);

    setAuthCookie(res, token);

    return res.status(200).json({ message: "Login Successfull" });
  } catch (e) {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return res.json({ message: "Logged out successfully." });
});

router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      message: "User found",
      user: {
        username: user.username,
        fullName: user.fullName,
      },
    });
  } catch (e) {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
