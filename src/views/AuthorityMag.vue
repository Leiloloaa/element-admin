<template>
  <div>
    <el-table
      :data="admins"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      border
    >
      <el-table-column prop="adminName" label="管理员姓名" width="280"></el-table-column>
      <el-table-column prop="adminSex" label="管理员性别" width="280"></el-table-column>
      <el-table-column prop="adminQX" label="管理员权限" width="280"></el-table-column>
      <el-table-column prop="isActive" label="是否激活" width="280"></el-table-column>
      <el-table-column fixed="right" label="操作" >
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.pagination {
  margin-top: 30px;
  /* position: absolute;
  right: 20px; */
}
</style>
<script>
export default {
  data() {
    return {
      admins: [],
      currentpage: 1
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    curchange(e) {
      this.currentpage = e;
    },
    fetch() {
      this.$http.get("admins").then(res => {
        this.admins = res.data;
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
      this.$router.push(`/admins/${id}/edit`);
    },
    remove(id) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http.delete(`admins/${id}`).then(() => {
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
  }
};
</script>