import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import DetailMenuView from '../views/DetailMenuView.vue'
import KeranjangView from '../views/KeranjangView.vue'
import OrderView from '../views/OrderView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/keranjang',
    name: 'keranjang',
    component: KeranjangView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  },
  {
    path: '/menu/:id',
    name: 'detailmenu',
    component: DetailMenuView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
