// 引入
const mongoose = require("./db.js");

// 订单表
const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    usersName: { type: String }, // 商家名称
    goodsName: { type: String },
    goodsPrice: { type: String },
    address: { type: String }, // 发货地址
    goodsStatu: { type: String }, // 订单支付状态
    goodsDeliver: { type: String } // 订单是否发货
  })
);

module.exports = Order;
