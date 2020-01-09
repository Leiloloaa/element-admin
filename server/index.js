const express = require("express");
const app = express();

const ObjectId = require("mongodb").ObjectId;

// 允许跨域
app.use(require("cors")());
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/element-admin", {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true
});

// 商品表
const Good = mongoose.model(
  "Good",
  new mongoose.Schema({
    goodsName: { type: String },
    goodsPrice: { type: String },
    goodsContent: { type: String },
    goodsCate: { type: String },
    goodsImg: { type: String },
    goodsImgSmall: { type: String },
    goodsComments: { type: Array }
  })
);

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

// 用户表
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    userName: { type: String },
    userPsd: { type: String },
    userSex: { type: String },
    address: { type: String },
    school: { type: String },
    userContent: { type: String }
  })
);

// 系统管理员表
const Admin = mongoose.model(
  "Admin",
  new mongoose.Schema({
    adminName: { type: String },
    adminPsd: { type: String }
  })
);

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

// 留言表
const lys = mongoose.model(
  "lys",
  new mongoose.Schema({
    userName: { type: String },
    lyTime: { type: String },
    lyContent: { type: String }
  })
);

// 商品操作---------------------------------
// 新增商品
app.post("/api/goods", async (req, res) => {
  const good = await Good.create(req.body);
  res.send(good);
});

// 商品列表
app.get("/api/goods", async (req, res) => {
  const goods = await Good.find();
  res.send(goods);
});

// 商品评论展示列表
app.get("/api/goodsComments/:id", async (req, res) => {
  const goods = await Good.findById(req.params.id);
  res.send(goods.goodsComments);
});

// 删除商品评论
// 问题：如何删除 此id 下的 字段中的 goodsComments 中的 这一条记录
app.delete("/api/goodsComments/:id", async (req, res) => {
  const goods = await Good.findById(req.params.id);
  await Good.deleteOne(goods.goodsComments);
  res.send({
    status: true
  });
});

// 删除商品
app.delete("/api/goods/:id", async (req, res) => {
  await Good.findByIdAndDelete(req.params.id);
  res.send({
    status: true
  });
});

// 商品详情
app.get("/api/goods/:id", async (req, res) => {
  const good = await Good.findById(req.params.id);
  res.send(good);
});

// 商品详情页渲染（前台）
app.get("/goodsdetails/:id", async (req, res) => {
  const good = await Good.findOne(ObjectId(req.params.id));
  res.send(good);
});

// 商品评论添加
app.post("/goodsdetails/:id", async (req, res) => {
  const good = await Good.findByIdAndUpdate(req.params.id, {
    $push: { goodsComments: req.body },
    $inc: { ReadCount: 1 }
  });
  res.send(good);
});

// 商品修改
app.put("/api/goods/:id", async (req, res) => {
  const good = await Good.findByIdAndUpdate(req.params.id, req.body);
  res.send(good);
});

// 商品订单操作---------------------------------
// 新增订单
app.post("/api/orders", async (req, res) => {
  const order = await Order.create(req.body);
  res.send(order);
});

// 订单列表
app.get("/api/orders", async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

// 删除订单
app.delete("/api/orders/:id", async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.send({
    status: true
  });
});

// 用户操作---------------------------------
// 新增用户
app.post("/api/users", async (req, res) => {
  const user = await User.create(req.body);
  res.send(user);
});

// 用户列表
app.get("/api/users", async (req, res) => {
  const user = await User.find();
  res.send(user);
});

// 删除用户
app.delete("/api/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({
    status: true
  });
});

// 用户详情
app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

// 用户登录后渲染（前台）
app.get("/usersdetails/:id", async (req, res) => {
  const user = await User.findOne(ObjectId(req.params.id));
  res.send(user);
});

// 后台用户修改 可以用get post put 遵循 resterful 规范
// put 是修改 覆盖性的修改
app.put("/api/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(user);
});

// 前台用户密码修改
// post 可以实现部分修改
app.post("/api/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(user);
});

// 公告栏操作---------------------------------
// 公告栏商品列表
app.get("/api/pubs", async (req, res) => {
  const pub = await Pub.find();
  res.send(pub);
});

// 删除公告栏商品
app.delete("/api/pubs/:id", async (req, res) => {
  await Pub.findByIdAndDelete(req.params.id);
  res.send({
    status: true
  });
});

// 公告栏商品详情
app.get("/api/pubs/:id", async (req, res) => {
  const pub = await Pub.findById(req.params.id);
  res.send(pub);
});

// 公告栏商品修改
app.put("/api/pubs/:id", async (req, res) => {
  const pub = await Pub.findByIdAndUpdate(req.params.id, req.body);
  res.send(pub);
});

// 留言区操作---------------------------------
// 新增留言
app.post("/api/lys", async (req, res) => {
  const ly = await lys.create(req.body);
  res.send(ly);
});

// 留言区列表
app.get("/api/lys", async (req, res) => {
  const ly = await lys.find();
  res.send(ly);
});

// 删除留言
app.delete("/api/lys/:id", async (req, res) => {
  await lys.findByIdAndDelete(req.params.id);
  res.send({
    status: true
  });
});

// 留言详情 渲染到页面的数据
app.get("/api/lys/:id", async (req, res) => {
  const ly = await lys.findById(req.params.id);
  res.send(ly);
});

// 留言修改
app.put("/api/lys/:id", async (req, res) => {
  const ly = await lys.findByIdAndUpdate(req.params.id, req.body);
  res.send(ly);
});

// 系统管理员操作---------------------------------
// 系统管理员密码修改
app.put("/api/admins/:id", async (req, res) => {
  const admin = await Admin.findByIdAndUpdate(req.params.id, req.body);
  res.send(admin);
});

app.get("/", async (req, res) => {
  res.send("index");
});

app.listen(3001, () => {
  console.log("http://localhost:3001");
});
