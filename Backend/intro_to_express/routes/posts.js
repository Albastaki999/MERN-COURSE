import express from "express";

const router = express.Router();

const allPosts = [];

router.get("/", (req, res) => {
  res.json(allPosts);
});

router.post("/create", (req, res) => {
  const { title, description } = req.body;

  const post = { title, description };

  allPosts.push(post);

  res.status(201).json(post);
});

router.get("/:index", (req, res) => {
  const { index } = req.params;
  if (index < 0 || index >= allPosts.length) {
    return res.status(400).json({ message: "Invalid Index" });
  }
  
  res.json(allPosts[index]);
});

export default router;
