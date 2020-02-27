<template>
  <div>
    <el-form @submit.native.prevent="saveAdmins" ref="form" :model="admin" label-width="120px">
      <el-form-item label="管理员姓名">
        <el-input v-model="admin.adminName"></el-input>
      </el-form-item>
      <el-form-item label="管理员性别">
        <el-select v-model="admin.adminSex" placeholder="请选择性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="管理员权限">
        <el-select v-model="admin.adminQX" placeholder="请选择权限">
          <el-option label="超级管理员" value="超级管理员"></el-option>
          <el-option label="一般管理员" value="一般管理员"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否激活">
        <el-select v-model="admin.isActive" placeholder="请选择状态">
          <el-option label="激活" value="激活"></el-option>
          <el-option label="禁用" value="禁用"></el-option>
        </el-select>
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
      admin: {
        adminName: "",
        adminSex: "",
        adminQX: "",
        isActive: ""
      }
    };
  },
  methods: {
    saveAdmins() {
      this.$http
        .put(`admins/${this.$route.params.id}`, this.admin)
        .then(res => {
          this.$message({
            message: "用户修改成功！",
            type: "success"
          });
          console.log(res.data);
          this.$router.push("/users/authorityMag");
        });
    },
    fetch() {
      this.$http.get(`admins/${this.$route.params.id}`).then(res => {
        this.admin = res.data;
      });
    },
    goback() {
      this.$router.push("/users/authorityMag");
    }
  },
  created() {
    this.fetch();
  }
};
</script>