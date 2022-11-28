const express = require("express");
const cors = require("cors");

const db = require("./utils/database");

const app = express();

const cats = [
  { id: 1, name: "coco" },
  { id: 2, name: "milo" },
  { id: 3, name: "snowy" },
  { id: 4, name: "meowy" },
  { id: 5, name: "jojo" },
];

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/api/cats", (req, res) => {
  res.json(cats);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
