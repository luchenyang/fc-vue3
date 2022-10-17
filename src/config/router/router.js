import {  createRouter,createWebHistory } from "vue-router";
const routes = [
  {
    path: '/',
    component: () => import('@/components/page/fcIndex')
    
  }
];

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
});

export default router;