<template>
  <div>
    <el-form @submit.native.prevent="updatePsd" ref="form" :model="admin" label-width="120px">
      <el-form-item label="用户名/ID">
        <el-input v-model="admin.adminId" placeholder="请输入管理员用户名/ID"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="adminOldPsd" type="password" placeholder="请输入不少于6位的密码"></el-input>
      </el-form-item>
      <el-form-item label="再次确认密码">
        <el-input v-model="adminNewPsd" type="password" placeholder="请重复输入您的密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">确认修改</el-button>
        <el-button @click="goback()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      admin: {
        adminId: "",
        adminPsd: ""
      },
      adminOldPsd: "",
      adminNewPsd: ""
    };
  },
  methods: {
    updatePsd() {
      if (this.adminOldPsd == this.adminNewPsd) {
        this.admin.adminPsd = this.adminNewPsd;
        this.$http.put(`admins/${this.admin.adminId}`, this.admin).then(res => {
          this.$message({
            message: "密码修改成功！",
            type: "success"
          });
          console.log(res.data);
          this.$router.push("/users/usersManage");
        });
      } else {
        return this.$message({
          message: "两次密码输入不一致！",
          type: "error"
        });
      }
    },
    goback() {
      this.$router.push("/users/usersManage");
    }
  }
};
</script>