const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser());
app.use(cookieParser());

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
