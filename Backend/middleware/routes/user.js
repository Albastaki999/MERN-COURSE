const express = require("express");
const posts = require("./posts");

const router = express.Router();
const users = [];

router.use("/posts", posts);

router.use((req, res, next) => {
  console.log("User middleware");
  next();
});

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/create", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  const containsUser = users.some((user) => user.username === username.toLowerCase());

  if (containsUser) {
    return res
      .status(400)
      .json({ error: "A user with this username already exists" });
  }

  const user = {
    username,
    password,
  };

  users.push(user);
  return res.status(201).json({ message: "User created successfully", user });
});

module.exports = router;
