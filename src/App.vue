<template>
  <el-container class="bgImage" style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router>
        <el-submenu index="1" :default-openeds="['1']">
          <template slot="title">
            <i class="el-icon-goods"></i>商品管理
          </template>
          <el-menu-item index="/goods/goodsList">商品列表</el-menu-item>
          <el-menu-item index="/goods/createGoods">新建商品</el-menu-item>
          <el-menu-item index="/goods/ordersList">订单管理</el-menu-item>
          <el-menu-item index="/pubs/pubGoods">公告商品</el-menu-item>
          <el-menu-item index="/goods/lyManage">留言管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user"></i>用户管理
          </template>
          <el-menu-item index="/users/usersManage">用户列表</el-menu-item>
          <el-menu-item index="/users/createUser">新建用户</el-menu-item>
          <el-menu-item index="/users/UpdatePsd">修改密码</el-menu-item>
          <el-menu-item index="/users/exit">退出系统</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container class="content">
      <!-- 头部组件 -->
      <top-vue></top-vue>

      <el-main>
        <!-- 路由 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

.content {
  flex-direction: column !important;
}

.el-aside {
  color: #404040;
}
</style>

<script>
import topVue from "./components/top.vue";

export default {
  data() {
    return {};
  },
  components: {
    topVue
  }
};
</script>