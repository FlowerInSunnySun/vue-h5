import Vue from 'vue'
import Router from 'vue-router'

import Mine from './mine'
import List from './list'
import Detail from './detail'

import Layout from '@/layouts/index.vue'
// import Home from '@/views/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home.vue')
        },
        // {
        //   path: '/detail',
        //   name: 'detail',
        //   component: () => import('@/views/detail.vue')
        // },
        ...List,
        ...Detail,
        ...Mine
      ]
    }
  ]
})
