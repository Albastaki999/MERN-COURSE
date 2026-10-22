import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const port = 3000;

await mongoose.connect("mongodb://localhost:27017/Todo-db");
app.use(express.json());
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`);
});
