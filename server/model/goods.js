// 引入
const mongoose = require("./db.js");

// 商品表
const Good = mongoose.model(
  "Good",
  new mongoose.Schema({
    goodsName: { type: String, trim: true },
    goodsPrice: { type: String },
    goodsContent: { type: String },
    goodsCate: { type: String },
    goodsImg: {
      type: String,
      set(parmas) {
        // 增加数据的时候兑 goodsImg 字段进行处理
        // parmas 可以获取 goodsImg 的值 返回的数据就是 goodsImg 在数据库实际保存的值
        if (!parmas) {
          return "";
        } else {
          if (
            parmas.indexOf("http://") != 0 &&
            parmas.indexOf("https://") != 0
          ) {
            return "https://" + parmas;
          }
          return parmas;
        }
      }
    },
    goodsImgSmall: {
      type: String,
      set(parmas) {
        if (!parmas) {
          return "";
        } else {
          if (
            parmas.indexOf("http://") != 0 &&
            parmas.indexOf("https://") != 0
          ) {
            return "https://" + parmas;
          }
          return parmas;
        }
      }
    },
    goodsComments: { type: Array }
  })
);

module.exports = Good;
