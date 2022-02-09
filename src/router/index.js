import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bankTransactions from "@/views/BankTransactions";

Vue.use(VueRouter)

const routes = [
  {
    path: '/get/transactions',
    name: 'Get transaction',
    component: bankTransactions
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
