<template>
  <div>
    <el-form @submit.native.prevent="saveUsers" ref="form" :model="user" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="user.userName"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="user.userSex" placeholder="请选择您的性别">
          <el-option label="男" value="0"></el-option>
          <el-option label="女" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收获地址">
        <el-input v-model="user.address"></el-input>
      </el-form-item>
      <el-form-item label="学校">
        <el-select v-model="user.school" placeholder="请选择您的学校">
          <el-option label="南大科院" value="ndky"></el-option>
          <el-option label="师大科院" value="sdky"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="个人简介" placeholder="请输入不超过120个字">
        <el-input type="textarea" v-model="user.userContent"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
        <el-button @click="goback()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        userSex: "",
        address: "",
        school: "",
        userContent: ""
      }
    };
  },
  methods: {
    saveUsers() {
      this.$http.put(`users/${this.$route.params.id}`, this.user).then(res => {
        this.$message({
          message: "用户修改成功！",
          type: "success"
        });
        console.log(res.data);
        this.$router.push("/users/usersManage");
      });
    },
    fetch() {
      this.$http.get(`users/${this.$route.params.id}`).then(res => {
        this.user = res.data;
      });
    },
    goback() {
      this.$router.push("/users/usersManage");
    }
  },
  created() {
    this.fetch();
  }
};
</script>