// 引入
const mongoose = require("./db.js");

// 公告商品表
const Pub = mongoose.model(
  "Pub",
  new mongoose.Schema({
    pubsName: { type: String },
    pubsPrice: { type: String },
    pubsCate: { type: String },
    pubsContent: { type: String }
  })
);

module.exports = Pub;
