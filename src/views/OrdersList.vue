<template>
  <div>
    <el-table
      :data="orders.slice((currentpage-1)*10,currentpage*10)"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      border
    >
      <el-table-column prop="usersName" label="商家名称" width="180"></el-table-column>
      <el-table-column prop="goodsName" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="goodsPrice" label="商品价格" width="180"></el-table-column>
      <el-table-column prop="goodsStatu" label="是否支付" width="130"></el-table-column>
      <el-table-column prop="goodsDeliver" label="是否发货" width="130"></el-table-column>
      <el-table-column prop="address" label="发货地址"></el-table-column>

      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="tel()" type="text" size="small">通知商家发货</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除此订单</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        @current-change="curchange"
        :total="orders.length"
        :page-size="10"
        class="pagination"
      ></el-pagination>
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
      orders: [],
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
      this.$http.get("orders").then(res => {
        this.orders = res.data;
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
      this.$confirm("此操作将永久删除该订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http.delete(`orders/${id}`).then(() => {
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
    },
    tel() {
      this.$confirm("已发短信通知商家发货", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success"
      });
    }
  }
};
</script>