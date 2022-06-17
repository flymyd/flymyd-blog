import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import("@/views/Index.vue"),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/About',
    name: 'About',
    component: () => import("@/views/About.vue"),
    meta: {
      title: '关于'
    }
  },
];

const router = createRouter({
  //hash模式. 历史模式为createWebHistory
  history: createWebHashHistory(),
  routes
});
export default router;
