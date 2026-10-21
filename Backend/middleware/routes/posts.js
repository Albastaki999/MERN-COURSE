const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Posts middleware");
  next();
});

router.get("/", (req, res) => {
  res.send("User Posts");
});

module.exports = router;
