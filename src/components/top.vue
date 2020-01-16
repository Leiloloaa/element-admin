<template>
  <el-header class="header_container">
    <div class="title">{{userName}}管理员</div>
    <el-dropdown>
      <div class="avatar"><img src="../assets/1.jpg" /></div>
      <el-dropdown-menu slot="dropdown" menu-align="start" >
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      userName: "小磊"
    };
  },
  methods: {
	
  }
};
</script>


<style scoped >
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

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.avatar{
  width: 36px;
  height: 36px;
}

.avatar img{
  display:block;
  width:100%;
  height:100%;
  border-radius: 50%;
}

.title {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  margin-right: 15px;
}

.el-icon-s-home {
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>