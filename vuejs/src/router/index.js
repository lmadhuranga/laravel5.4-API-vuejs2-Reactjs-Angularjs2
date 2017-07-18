import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/authentication/Login'
import Register from '@/components/authentication/Register'
import Feed from '@/components/Feed'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/login',
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/feed',
      component: Feed,
      meta: {
        forAuth: true
      }
      
    }
  ]
})
