<template>
  <div class="contain">
    <div class="admin_title">
      <h1>管理员信息</h1>
    </div>
    <div class="info">
      <ul>
        <li> 
         <img src="../assets/1.jpg" class="avatar"/>
        </li>
        <li class="item">
          <span>管理员 ID：</span>
          <span>{{admin._id}}</span>
        </li>
        <li class="item">
          <span>姓名：</span>
          <span>{{admin.adminName}}</span>
        </li>
        <li class="item">
          <span>性别：</span>
          <span>{{admin.adminSex}}</span>
        </li>
        <li class="item">
          <span>权限：</span>
          <span>{{admin.adminQX}}</span>
        </li>
        <li class="item">
          <span>是否激活：</span>
          <span>{{admin.isActive}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admin: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.$http.get("admins").then(res => {
        this.admin = res.data[0];
      });
    }
  }
};
</script>

<style>
ul,
li {
  line-height: 40px;
  list-style-type: none;
   padding:0px;
}

.item{
  padding-left:30px;
  margin-top:5px;
}

.contain {
  width: 600px;
  margin: 0 auto;
  background: #f9fafc;
  border: 1px solid #f9fafc;
}

.admin_title {
  text-align: center;
  line-height: 40px;
  height: 40px;
  color:#aaa
}

.info {
  font-size:14px;
  color:#aaa;
}

.avatar{
  margin: 0 auto;
  display:block;
  width:120px;
  height:120px;
}
</style>
