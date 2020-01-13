// 操作 users 表的 js

// 引入
const mongoose = require("./db.js");

// 定义 映射与模型
// 用户表
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    // trim: true 预定义模式修饰符 会去掉字段左右空格
    // setters（增加） 和 getters（不建议使用） 自定义修饰符 goods 模型中演示
    userName: { type: String, trim: true },
    userPsd: { type: String },
    userSex: { type: String, default: 0 },
    address: { type: String },
    school: { type: String },
    userContent: { type: String }
  })
);

module.exports = User;
