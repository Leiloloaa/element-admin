# element-admin

## about

此项目是 vue + element-ui + nodeJS + mongoDB 构建的后台管理系统,是前台[淘二淘]的后台
前后台分离,更好管理校园二手商城系统

## 启动项目步骤

1.  开启 mongo 数据库
    mongod
2.  开启后台
    npm run serve
3.  开启服务器
    nodemon serve
4.  开启移动 app
    ionic serve

## 各个端口

| 界面       | 端口                             |
| ---------- | -------------------------------- |
| 移动端 app | http://localhost:8100/           |
| 后台管理   | http://localhost:8080/           |
| 服务端     | http://localhost:3001/           |
| 各接口     | http://localhost:3001/api/(表名) |
