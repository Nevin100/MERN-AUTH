const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.listen(4444, () => {
  console.log("Server is running on port 4000");
});
