import express from "express";
import postRoutes from "./routes/posts.js";

const app = express();
const port = 3000;

// Serving Static files
// app.use(express.static("public"));
app.use(express.json());
app.use("/posts", postRoutes);

app.get("/posts", (req, res) => {
  res.send("App.js")
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About 1");
});

app.get("/mail", (req, res) => {
  res.send("Mail");
});

// app.get('/posts/javascript', (req, res) => {
//   res.send('Javascript Post');
// });

// app.get('/posts/python', (req, res) => {
//   res.send('python Post');
// });

// Params
// app.get("/posts/:postname/:random", (req, res) => {
//   const { postname, random } = req.params;
//   res.send(postname + " Post " + random);
// });

// Query
app.get("/add-numbers", (req, res) => {
  const { a, b } = req.query;
  res.send(Number(a) + Number(b));
});

app.post("/sample-post", (req, res) => {
  res.send("Hello");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "rashid" && password === "1234") {
    const response = {
      message: "Login Successfull",
    };
    res.json(response);
  } else {
    res.status(401).json({ message: "Invalid username/password" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
