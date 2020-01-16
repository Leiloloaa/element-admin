<template>
  <div class="contain">
    <el-card>
      <div slot="header" class="clearfix">
         <h3>淘二淘后台管理系统</h3>
      </div>
      <div class="text item">1、此管理系统最主要是两大功能：管理商品信息、管理用户信息</div>
      <div class="text item">2、管理商品信息包括：商品列表展示、新建商品、订单管理、公告商品管理以及留言管理等功能</div>
      <div class="text item">3、管理用户信息包括：用户列表展示、新建用户、管理员信息展示、修改管理员密码等功能</div>
      <div class="text item">有趣问答：请问被称作古今七言律第一的是那首诗？<br />（请将答案发至leiloloaa@163.com,我们会抽取幸运答题人,送出我们的礼物。）</div>
    </el-card>
  </div>
</template>

<script>
</script>

<style >
h3{
  color:#909099;
}

.text {
  font-size: 16px;
  color:#909099;
}

.item {
  margin-bottom: 18px;

}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.clearfix{
  text-align:center;
}

.contain{
  width: 500px;
  margin: 0 auto;
}
</style>
