const express = require('express');
const router = express.Router();
const Trade = require("../models").trade;
const User = require("../models").user

/* GET trades listing. */
router.get('/', async function(req, res, next) {
  try {
    const trade = await Trade.findAll();
    if (trade) {
      res.send(trade);
    } else {
      res.status(404).send("trade not found");
    }
  } catch (e) {
    next(e);
  }
});

router.get('/:userId', async function(req, res, next) {
  try {
    console.log('here');
      const trade = await Trade.findByPk(1, {include:[User]});
    console.log("here", trade);
    if (trade) {
      res.send(trade);
    } else {
      res.status(404).send("trade not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;