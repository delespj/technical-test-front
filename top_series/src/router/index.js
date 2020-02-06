import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import listSeries from '../views/listSeries'
import topSeries from '../views/topSeries'
import otherSeries from '../views/otherSeries'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/series',
    name: 'listSeries',
    component: listSeries
  },
  {
    path: '/ranking_1-to-5',
    name: 'topSeries',
    component: topSeries
  },
  {
    path: '/ranking_6-to-10',
    name: 'otherSeries',
    component: otherSeries
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
