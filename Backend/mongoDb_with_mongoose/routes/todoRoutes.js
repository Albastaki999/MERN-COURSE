import express from "express";
import { Todo } from "../models/todo.js";
import { User } from "../models/user.js";

const router = express.Router();
// Create a new Todo
router.post("/create", async (req, res) => {
  const { title, desc, userId } = req.body;

  const todo = new Todo({
    title,
    desc,
    user: userId,
  });

  await todo.save();

  return res.status(201).json({ message: "Todo created successfully", todo });
});

// Get all Todos with the usernames of the user
router.get("/all", async (req, res) => {
  const todos = await Todo.find();

  let response = await Promise.all(
    todos.map(async (todo) => {
      const user = await User.findById(todo.user);
      return {
        title: todo.title,
        desc: todo.desc,
        id: todo._id,
        isDone: todo.isDone,
        username: user.username,
      };
    }),
  );

  return res.json(response);
});

// Provided user's name, fetch their todos
router.get("/get-todos-by-name", async (req, res) => {
  const { name } = req.query;

  const user = await User.findOne({ username: name });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const todos = await Todo.find({ user: user._id });

  if (todos.length == 0) {
    return res.json({ message: `No Todos found for ${name}` });
  }

  let response = await Promise.all(
    todos.map(async (todo) => {
      const user = await User.findById(todo.user);
      return {
        title: todo.title,
        desc: todo.desc,
        id: todo._id,
        isDone: todo.isDone,
        username: user.username,
      };
    }),
  );

  return res.json(response);
});

router.put("/mark-done", async (req, res) => {
  const { userId, todoId } = req.body;

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const todo = await Todo.findById(todoId);

  if (!todo) {
    return res.status(404).json({ error: "Todo does not exist" });
  }

//   console.log(todo.user);
//   console.log(user._id);
//   console.log(todo.user != user._id);
//   console.log(todo.user !== user._id);
  

  if (! todo.user.equals(user._id)) {
    return res.status(400).json({ error: "Todo does not belong to this user" });
  }

  if (todo.isDone) {
    return res.status(404).json({ error: "Todo is already done" });
  }

  todo.isDone = true;

  await todo.save();

  return res.json({ message: "Todo completed", todo });
});

export default router;
