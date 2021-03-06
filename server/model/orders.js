// 引入
const mongoose = require("./db.js");

// 订单表
const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    goodsName: { type: String },
    goodsPrice: { type: String },
    address: { type: String }, // 发货地址
    goodsStatu: { type: String }, // 订单支付状态
    goodsDeliver: { type: String },// 订单是否发货
    userId: { type: String }, // 订单用户 ID
    userName: { type: String }, // 订单用户 用户名
    attr: { type: String }, // 发货方式
  })
);

module.exports = Order;
