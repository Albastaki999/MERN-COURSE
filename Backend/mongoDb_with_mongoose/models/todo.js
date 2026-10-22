import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  desc: {
    required: true,
    type: String,
  },
  isDone: {
    default: false,
    type: Boolean,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

export const Todo = mongoose.model('Todo', todoSchema);
