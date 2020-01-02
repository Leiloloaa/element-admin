<template>
  <div>
    <el-table
      :data="users.slice((currentpage-1)*10,currentpage*10)"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      border
    >
      <el-table-column prop="userName" label="用户名" width="180"></el-table-column>
      <el-table-column prop="userSex" label="性别（0为男，1为女）" width="180"></el-table-column>
      <el-table-column prop="address" label="收货地址" width="180"></el-table-column>
      <el-table-column prop="school" label="学校" width="180"></el-table-column>
      <el-table-column prop="userContent" label="个人简介"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        @current-change="curchange"
        :total="users.length"
        :page-size="10"
        class="pagination"
      ></el-pagination>
      <!--   :hide-on-single-page="currentpage" -->
    </div>
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
      users: [],
      currentpage: 1
    };
  },
  methods: {
    curchange(e) {
      this.currentpage = e;
    },
    fetch() {
      this.$http.get("users").then(res => {
        this.users = res.data;
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
      this.$router.push(`/users/${id}/edit`);
    },
    remove(id) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http.delete(`users/${id}`).then(() => {
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