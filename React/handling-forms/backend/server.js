import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/submitForm", (req, res) => {
  console.log(req.body);

  res.send({ message: "Form Submitted!" });
});

app.listen(port, () => {
  console.log(`Form App listening on port ${port}`);
});
