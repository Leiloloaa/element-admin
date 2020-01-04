<template>
  <el-header style="text-align: right; font-size: 12px">
    <div class="title">欢迎！{{userName}}管理员登录淘二淘后台管理系统!</div>
    <el-dropdown>
      <i class="el-icon-s-home" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>商品</el-dropdown-item>
        <el-dropdown-item>用户</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="avatar"></div>
  </el-header>
</template>

<script>
export default {
  data(){
    return{
      userName:'小磊'
    }
  }
};
</script>


<style scoped >
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
  width: 25px;
  height: 25px;
  background: #af2097;
  border-radius: 5px;
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