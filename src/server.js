const express = require("express");

// routes
const users = require("../routes/api/users");
const profile = require("../routes/api/profile");
const posts = require("../routes/api/posts");
const auth = require("../routes/api/auth");
const path = require("path");

// db connection string
const connectDB = require("../config/db");

// Connect to MongoDB
connectDB();

// entry point for API
const app = express();

// init middleware
app.use(express.json({ extended: false }));

// define Routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.port || 5000;
