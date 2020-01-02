<template>
  <div>
    <el-table :data="goodsComments" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="goodsTime" label="评论时间" width="380"></el-table-column>
      <el-table-column prop="goodsComments" label="评论内容"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <el-button @click="remove(id)" type="text" size="small">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.id,
      goodsComments: []
    };
  },
  methods: {
    fetch() {
      this.$http.get(`goodsComments/${this.$route.params.id}`).then(res => {
        this.goodsComments = res.data;
      });
    },
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "warning-row";
      } else if (rowIndex % 2 == 0) {
        return "success-row";
      }
      return "";
    },
    remove(id) {
      this.$confirm("此操作将永久删除该评论, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http.delete(`goodsComments/${id}`).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.fetch();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style scoped>
</style>