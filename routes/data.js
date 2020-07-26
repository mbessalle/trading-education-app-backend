const express = require("express");
const router = express.Router();
const krakenKey = process.env.KRAKEN_KEY;
const krakenSecret = process.env.KRAKEN_SECRET;
const KrakenClient = require("kraken-api");
const kraken = new KrakenClient(krakenKey, krakenSecret);

let ohlcData = [];
let last;

const refreshData = async () => {
  // Kraken API Request
  let raw;
  if (last) {
    raw = await kraken.api("OHLC", {
      pair: "XXBTZUSD",
      interval: 5,
      since: last,
    });
    ohlcData.pop()
  } else {
    raw = await kraken.api("OHLC", { pair: "XXBTZUSD", interval: 5 });
  }
  const data = raw.result.XXBTZUSD;
  last = raw.result.last;

  // Updating Data Array
  ohlcData.push(
    ...data.map((ca) => ({
      time: parseInt(ca[0]),
      open: parseFloat(ca[1]),
      high: parseFloat(ca[2]),
      low: parseFloat(ca[3]),
      close: parseFloat(ca[4]),
    }))
  );
};
setInterval(refreshData, 15000);

router.get("/", async (req, res, next) => {
  res.json(ohlcData);
});

module.exports = router;
