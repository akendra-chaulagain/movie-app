const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");
router.use(bodyParser.json()); // for parsing application/json

router.get("/", (req, res) => {
  res.send("hello from Router");
});

// database
require("../connection/database");

// usere schema and models
const User = require("../modules/User");

// register user data

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(500).json("enter all the data ");
  }
  try {
    // if  email already exist in database then this statement will run
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res
        .status(500)
        .json("Email already exist. Please enter new email");
    }
    // if email is new then this will run
    const user = new User({ username, email, password });
    // generate salt to hash password
    const salt = await bcrypt.genSalt(12);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
      // { expiresIn: "1hr" }
      // { expiresIn: "1d" }
      // { expiresIn: "20s" }
      // { expiresIn: "15m" }
    );
    // saving in cookie
    res.cookie("jsonwebToken", token, {
      expires: new Date(Date.now() + 1000 * 60 * 60),
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
    const result = await user.save();
    return res.status(200).json(result, token);
  } catch (error) {
    console.log(error);
  }
});

// login user data
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
      // { expiresIn: "1hr" }
      // { expiresIn: "1d" }
      // { expiresIn: "20s" }
      // { expiresIn: "15m" }
    );
    // saving in cookie
    res.cookie("jsonwebToken", token, {
      expires: new Date(Date.now() + 1000 * 60 * 60),
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });

    if (isMatch) {
      const { password, ...others } = user._doc;
      res.status(200).json({ ...others, token });
    } else {
      res.status(400).json({ error: "Invalid data" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
});

module.exports = router;
