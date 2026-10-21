const express = require("express");
const user = require("./routes/user");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/contact", (req, res) => {
  console.log("contact");
  res.send("contact");
});

// Middleware - 1
app.use((req, res, next) => {
  console.log("M1");
  req.rashid = "rashid";
  next(); // Go to next middleware or route handler
});

app.use("/user", user);

// Middleware - 2
app.use((req, res, next) => {
  console.log("M2");
  // res.send("Stopped at M2") // once response is sent, the cycle is over
  next();
});

app.get("/user", (req, res) => {
  console.log("Users");
  res.send("users");
});

app.get("/", (req, res) => {
  console.log("Slash");
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  console.log("About");
  res.send(req.rashid);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
