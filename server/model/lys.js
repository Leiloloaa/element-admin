// 引入
const mongoose = require("./db.js");

// 留言表
const lys = mongoose.model(
  "lys",
  new mongoose.Schema({
    userName: { type: String },
    lyTime: { type: String },
    lyContent: { type: String }
  })
);

module.exports = lys;
