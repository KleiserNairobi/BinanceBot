const Binance = require("binance-api-node").default;

const client = Binance({
  apiKey: process.env.BINANCE_API_KEY,
  apiSecret: process.env.BINANCE_API_SECRET,
  getTime: () => Date.now(),
  //httpBase: "https://testnet.binance.vision/api",
});

module.exports = client;
