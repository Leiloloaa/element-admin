<template>
  <div>
    <el-table
      :data="goods.slice((currentpage-1)*10,currentpage*10)"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      border
    >
      <el-table-column prop="goodsName" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="goodsPrice" label="商品价格(元)" width="80"></el-table-column>
      <el-table-column prop="goodsCate" label="商品分类" width="180"></el-table-column>
      <el-table-column prop="goodsImg" label="商品展示图（网络地址）" width="180"></el-table-column>
      <el-table-column prop="goodsImgSmall" label="商品缩略图（网络地址）" width="180"></el-table-column>
      <el-table-column prop="goodsContent" label="商品介绍"></el-table-column>
      <el-table-column fixed="right" label="商品评论" width="100">
        <template slot-scope="scope">
          <el-button @click="seeCmt(scope.row._id)" type="text" size="small">查看评论</el-button>
        </template>
      </el-table-column>
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
        :total="goods.length"
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
}
</style>
<script>
export default {
  data() {
    return {
      goods: [],
      currentpage: true
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
      this.$http.get("goods").then(res => {
        this.goods = res.data;
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
    seeCmt(id) {
      this.$router.push(`/goods/${id}/goodsComments`);
    },
    edit(id) {
      this.$router.push(`/goods/${id}/edit`);
    },
    remove(id) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http.delete(`goods/${id}`).then(() => {
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