// 连接数据库
const mongoose = require("mongoose");

// 也可以有加密码的方式 有用到再看 三个参数是4.0后需要加的 不然会出现警告
mongoose.connect(
  "mongodb://localhost:27017/element-admin",
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
  },
  function(err) {
    if (err) {
      console.log(err);
      return;
    }
  }
);

// 暴露出去
module.exports = mongoose;
