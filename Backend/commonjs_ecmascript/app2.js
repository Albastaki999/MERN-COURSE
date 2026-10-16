// Common js
const http = require("http");
const {a, b, c, d} = require("./myModule2.js")

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>Hello, World</h1>");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  
});
