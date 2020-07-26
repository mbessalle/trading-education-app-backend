const express = require("express");
const router = express.Router();
const Course = require("../models").course;
const User = require("../models").user;

/* GET courses listing. */
router.get("/", async function (req, res, next) {
  try {
    const course = await Course.findAll();
    if (course) {
      res.send(course);
    } else {
      res.status(404).send("Course not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
