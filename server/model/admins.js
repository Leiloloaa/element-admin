// 引入
const mongoose = require("./db.js");

// 系统管理员表
const Admin = mongoose.model(
  "Admin",
  new mongoose.Schema({
    adminName: { type: String },
    adminPsd: { type: String },
    adminSex: { type: String },
    adminQX: { type: String },
    adminInfo: { type: String }
  })
);

module.exports = Admin;
