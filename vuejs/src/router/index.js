import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Hello from '@/components/Hello'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/post',
      name: 'Post',
      component: Posts
    },
    {
        path: '/post',
        name: 'Home',
        component: Hello
    }
  ]
})
