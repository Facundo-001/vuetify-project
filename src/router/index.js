import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // Carga peresosa mas rendimiento es mas optimo usarlo asi
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },{
    // Carga peresosa mas rendimiento es mas optimo usarlo asi
    path: '/more-info',
    name: 'MoreInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/MoreInfo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
