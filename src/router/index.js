import Vue from 'vue'
import VueRouter from 'vue-router'

import TodoAllItems from "../components/listsViews/TodoAllItems.vue";
import TodoActiveItems from "../components/listsViews/TodoActiveItems.vue";
import TodoCompleteItems from "../components/listsViews/TodoCompletedItems.vue";

Vue.use(VueRouter)

export const routes = [
  { path: "/", name:"all", component: TodoAllItems },
  { path: "/active", component: TodoActiveItems },
  { path: "/complete", component: TodoCompleteItems },
];

const router = new VueRouter({
  routes
})

export default router
