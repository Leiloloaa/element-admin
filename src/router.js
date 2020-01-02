import Vue from "vue";
import Router from "vue-router";

import GoodsList from "./views/GoodsList.vue";
import CreateGoods from "./views/CreateGoods.vue";
import EditGoods from "./views/EditGoods.vue";
import PubGoods from "./views/PubGoods.vue";
import EditPubs from "./views/EditPubs.vue";
import LyManage from "./views/LyManage.vue";
import EditLy from "./views/EditLy.vue";
import CommentMag from "./views/CommentMag.vue";
import CreateUser from "./views/CreateUser.vue";
import UsersList from "./views/UsersList.vue";
import EditUsers from "./views/EditUsers.vue";
import UpdatePsd from "./views/UpdatePsd.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/goods/goodsList"
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
      path: "/users/UpdatePsd",
      component: UpdatePsd
    }
  ]
});
