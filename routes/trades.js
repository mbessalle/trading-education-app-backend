const express = require("express");
const router = express.Router();
const Trade = require("../models").trade;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

/* GET trades listing. */
router.get("/", async function (req, res, next) {
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

router.post("/", authMiddleware, async function (req, res, next) {
  const { BTCbalance, USDbalance, id } = req.user;
  const { type, price } = req.body;

  if (
    (USDbalance === 0 && type === "BUY") ||
    (BTCbalance === 0 && type === "SELL")
  ) {
    res.send("Insufficient balance");
    return;
  }

  let newBTCbalance, newUSDbalance, BTCamount, USDamount;
  switch (type) {
    case "BUY":
      newUSDbalance = 0;
      newBTCbalance = USDbalance / price;
      BTCamount = newBTCbalance;
      USDamount = -USDbalance;
      break;
    case "SELL":
      newBTCbalance = 0;
      newUSDbalance = BTCbalance * price;
      BTCamount = -BTCbalance;
      USDamount = newUSDbalance;
      break;
    default:
      res.send("Wrong type, should be BUY or SELL");
      return;
  }

  try {
    const trade = await Trade.create({
      executionTime: Date.now(),
      BTCamount,
      USDamount,
      userId: id
    });

    const user = req.user;
    user.USDbalance = newUSDbalance
    user.BTCbalance = newBTCbalance
    await user.save();

    console.log('Trade created')
    // res.status(404).send("trade not found");
  } catch (e) {
    res.send(e)
    // next(e);
  }
  console.log()
});

router.get("/:userId", async function (req, res, next) {
  try {
    console.log("here");
    const trade = await Trade.findByPk(req.params.userId, { include: [User] });
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
