import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import History from '../views/History.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/task/task3/dist/',
    name: 'list',
    component: List
  },
  {
    path: '/task/task3/dist/history/:page?',
    params: false,
    name: 'history',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
