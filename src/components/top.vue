<template>
  <el-header class="header_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/goods/goodsList' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">欢迎！{{userName}}管理员登录淘二淘后台管理系统!</div>
    <el-dropdown>
      <div class="avatar"></div>
      <el-dropdown-menu slot="dropdown" menu-align="start">
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
  <!-- <div class="header_container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown @command="handleCommand" >
      <img :src="baseImgPath + adminInfo.avatar" class="avator" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>-->
</template>

<script>
export default {
  data() {
    return {
      userName: "小磊"
    };
  }
};
</script>


<style scoped >
/* @import "../style/mixin"; */
/* .header_container {
  background-color: #000;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.avator {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 37px;
} */
.header_container {
  background-color: #000;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.el-dropdown-menu__item {
  text-align: center;
}
.breadcrumb {
  position: absolute;
  left: 230px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.avatar {
  width: 36px;
  height: 36px;
  background: #657eaf;
  border-radius: 50%;
}

.title {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 15px;
  margin-right: 15px;
}

.el-icon-s-home {
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>