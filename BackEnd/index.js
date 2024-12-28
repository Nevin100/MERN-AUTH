const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Initialize the express into app
const app = express();

//Model Implementation:
const User = require("./models/User.js");

//Setting CORS and Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Mongodb connection
mongoose.connect("mongodb://localhost:27017/full-mern-stack");

//Route
//Register:
app.post("/api/register", async (req, res) => {
  const { username, password, email } = req.body;
  console.log("Request body:", req.body);
  try {
    const UserDoc = await User.create({ username, password, email });
    res.json(UserDoc);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(400).json(err);
  }
});

//login
app.post("/api/login", async (req, res) => {
  const UserDoc = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (UserDoc) {
    return res.json({ status: "Ok", user: true });
  } else {
    return res.json({ status: "Error", user: false });
  }
});

app.listen(4444, () => {
  console.log("Server is running on port 4444");
});
