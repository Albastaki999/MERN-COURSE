import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/authRoutes.js";
import diaryRoutes from "./routes/diaryRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import dns from "dns"

// dns.setServers(["8.8.8.8", "1.1.1.1"]);
env.config({ path: "./diary_creds.env" });
const port = process.env.PORT;

console.log("Connecting with database...");

await mongoose.connect(process.env.MONGODB_URI);
console.log("Connected successfully");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use("/auth", userRoutes);
app.use("/diary", diaryRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
