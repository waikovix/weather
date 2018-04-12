import Vue from 'vue'
import Router from 'vue-router'
import Structure from '@/components/Structure'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'structute',
      component: Structure
    }
  ]
})
