<template>
  <div>
    <el-form @submit.native.prevent="saveGoods" ref="form" :model="good" label-width="120px">
      <el-form-item label="商品名称">
        <el-input v-model="good.goodsName"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="good.goodsPrice"></el-input>
      </el-form-item>
      <el-form-item label="商品类别">
        <el-select v-model="good.goodsCate" placeholder="请选择商品类别">
          <el-option label="生活用品" value="lifegoods"></el-option>
          <el-option label="电子商品" value="elegoods"></el-option>
          <el-option label="二手图书" value="bookgoods"></el-option>
          <el-option label="其它商品" value="othergoods"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品展示图">
        <el-input v-model="good.goodsImg"></el-input>
      </el-form-item>
      <el-form-item label="商品缩略图">
        <el-input v-model="good.goodsImgSmall"></el-input>
      </el-form-item>
      <el-form-item label="商品介绍" placeholder="请输入不超过30个字">
        <el-input type="textarea" v-model="good.goodsContent"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
        <el-button @click="goback()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      good: {
        goodsName: "",
        goodsPrice: "",
        goodsContent: "",
        goodsCate: "",
        goodsImg: "",
        goodsImgSmall: ""
      }
    };
  },
  methods: {
    saveGoods() {
      this.$alert("创建成功", "提示", {
        confirmButtonText: "确定",
        callback: () => {
          this.$http.post("goods", this.good).then(res => {
            this.$message({
              message: "商品创建成功！",
              type: "success"
            });
            console.log(res.data);
            this.$router.push("/goods/goodsList");
          });
        }
      });
    },
    goback() {
      this.$router.push("/goods/goodsList");
    }
  }
};
</script>