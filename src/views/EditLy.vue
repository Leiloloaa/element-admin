<template>
  <div>
    <el-form @submit.native.prevent="saveLys" ref="form" :model="ly" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="ly.userName"></el-input>
      </el-form-item>
      <el-form-item label="留言时间">
        <el-input v-model="ly.lyTime"></el-input>
      </el-form-item>
      <el-form-item label="留言内容" placeholder="请输入不超过120个字">
        <el-input type="textarea" v-model="ly.lyContent"></el-input>
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
      ly: {
        userName: "",
        lyTime: "",
        lyContent: ""
      }
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    saveLys() {
      this.$http.put(`lys/${this.$route.params.id}`, this.ly).then(res => {
        this.$message({
          message: "留言保存成功！",
          type: "success"
        });
        console.log(res.data);
        this.$router.push("/goods/lyManage");
      });
    },
    fetch() {
      this.$http.get(`lys/${this.$route.params.id}`).then(res => {
        this.ly = res.data;
      });
    },
    goback() {
      this.$router.push("/goods/lyManage");
    }
  }
};
</script>