const express = require("express");
const mongoose = require("mongoose");

// routes
const users = require("../routes/api/users");
const profile = require("../routes/api/profile");
const posts = require("../routes/api/posts");

// db connection string
const db = require("../config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// entry point for API
const app = express();

// init middleware
app.use(express.json({ extended: false }));

// define Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.get("/", (req, res) => res.send("Hello World! Isaac"));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
