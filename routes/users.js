const express = require("express");
// const course = require("../models/course");
const router = express.Router();
const User = require("../models").user;

/* GET users */
router.get("/", async function (req, res, next) {
  try {
    const user = await User.findAll();
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("user not found");
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:userId", async function (req, res, next) {
  try {
    console.log();
      const user = await User.findByPk(1, {include:['courses']});
    console.log("here", user);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("user not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
