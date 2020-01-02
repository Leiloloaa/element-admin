<template>
  <div>
    <el-form @submit.native.prevent="savePubs" ref="form" :model="pub" label-width="120px">
      <el-form-item label="商品名称">
        <el-input v-model="pub.pubsName"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="pub.pubsPrice"></el-input>
      </el-form-item>
      <el-form-item label="商品类别">
        <el-select v-model="pub.pubsCate" placeholder="请选择商品类别">
          <el-option label="生活用品" value="lifegoods"></el-option>
          <el-option label="电子商品" value="elegoods"></el-option>
          <el-option label="图书" value="bookgoods"></el-option>
          <el-option label="其它" value="othergoods"></el-option>
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
      pub: {
        pubsName: "",
        pubsPrice: "",
        pubsContent: "",
        pubsCate: ""
      }
    };
  },
  methods: {
    savePubs() {
      this.$http.put(`pubs/${this.$route.params.id}`, this.pub).then(res => {
        this.$message({
          message: "商品保存成功！",
          type: "success"
        });
        console.log(res.data);
        this.$router.push("/pubs/pubGoods");
      });
    },
    fetch() {
      this.$http.get(`pubs/${this.$route.params.id}`).then(res => {
        this.pub = res.data;
      });
    },
    goback(){
      this.$router.push("/pubs/pubGoods");
    }
  },
  created() {
    this.fetch();
  }
};
</script>