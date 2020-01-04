<template>
  <div>
    <el-table
      :data="pubs"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      border
    >
      <el-table-column prop="pubsName" label="商品名称" width="300"></el-table-column>
      <el-table-column prop="pubsPrice" label="商品价格(元)" width="280"></el-table-column>
      <el-table-column prop="pubsCate" label="商品分类"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
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
      pubs: [],
      currentpage: 1
    };
  },
  methods: {
    curchange(e) {
      this.currentpage = e;
    },
    fetch() {
      this.$http.get("pubs").then(res => {
        this.pubs = res.data;
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
      this.$router.push(`/pubs/${id}/edit`);
    }
  },
  created() {
    this.fetch();
  }
};
</script>