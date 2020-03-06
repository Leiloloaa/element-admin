import Vue from "vue";
import Router from "vue-router";

// const Login = r => require.ensure([], () => r(require('@/view/login')), 'login');
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import GoodsList from "./views/GoodsList.vue";
import CreateGoods from "./views/CreateGoods.vue";
import EditGoods from "./views/EditGoods.vue";
import OrdersList from "./views/OrdersList.vue";
import PubGoods from "./views/PubGoods.vue";
import EditPubs from "./views/EditPubs.vue";
import LyManage from "./views/LyManage.vue";
import EditLy from "./views/EditLy.vue";
import CommentMag from "./views/CommentMag.vue";
import CreateUser from "./views/CreateUser.vue";
import UsersList from "./views/UsersList.vue";
import EditUsers from "./views/EditUsers.vue";
import UpdatePsd from "./views/UpdatePsd.vue";
import AdminInfo from "./views/AdminInfo.vue";
import AuthorityMag from "./views/AuthorityMag.vue";
import EditAdmin from "./views/EditAdmin.vue";
import Explain from "./views/Explain.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Login
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/goods/goodsList",
      component: GoodsList
    },
    {
      path: "/goods/:id/goodsComments",
      component: CommentMag
    },
    {
      path: "/goods/createGoods",
      component: CreateGoods
    },
    {
      path: "/goods/:id/edit",
      component: EditGoods
    },
    {
      path: "/goods/ordersList",
      component: OrdersList
    },
    {
      path: "/pubs/pubGoods",
      component: PubGoods
    },
    {
      path: "/pubs/:id/edit",
      component: EditPubs
    },
    {
      path: "/goods/lyManage",
      component: LyManage
    },
    {
      path: "/lys/:id/edit",
      component: EditLy
    },
    {
      path: "/goods/commentMag",
      component: CommentMag
    },
    {
      path: "/users/createUser",
      component: CreateUser
    },
    {
      path: "/users/usersManage",
      component: UsersList
    },
    {
      path: "/users/:id/edit",
      component: EditUsers
    },
    {
      path: "/users/updatePsd",
      component: UpdatePsd
    },
    {
      path: "/users/adminInfo",
      component: AdminInfo
    },
    {
      path: "/users/authorityMag",
      component: AuthorityMag
    },
    {
      path: "/admins/:id/edit",
      component: EditAdmin
    },
    {
      path: "/explain",
      component: Explain
    },
  ]
});
