const express = require("express");

const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

// @route  GET api/posts/test
// @desc   Test posts route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

module.exports = router;
