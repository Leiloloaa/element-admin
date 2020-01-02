<template>
  <div>
    <el-table
      :data="lys.slice((currentpage-1)*10,currentpage*10)"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      border
    >
      <el-table-column prop="userName" label="用户名称" width="200"></el-table-column>
      <el-table-column prop="lyTime" label="留言时间" width="180"></el-table-column>
      <el-table-column prop="lyContent" label="留言内容"></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      @current-change="curchange"
      :total="lys.length"
      :page-size="10"
      class="pagination"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lys: [],
      currentpage: 1
    };
  },
  methods: {
    curchange(e) {
      this.currentpage = e;
    },
    fetch() {
      this.$http.get("lys").then(res => {
        this.lys = res.data;
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
    edit(id) {
      this.$router.push(`/lys/${id}/edit`);
    },
    remove(id) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http.delete(`lys/${id}`).then(() => {
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