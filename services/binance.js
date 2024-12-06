const Binance = require("binance-api-node").default;

const client = Binance({
  apiKey: process.env.APIKEY,
  apiSecret: process.env.SECRET,
  getTime: () => Date.now(),
  //httpBase: "https://testnet.binance.vision/api",
});

module.exports = client;
