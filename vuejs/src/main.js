// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth.js'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Auth)

Router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if(Vue.auth.isAuthenticated()){        
        next({
          path:'/feed'
        })
      }
      else next()
    } 
    else if(to.matched.some(record => record.meta.forAuth)){
      if( ! Vue.auth.isAuthenticated()){        
        next({
          path:'/login'
        })
      }
      else next()
    } 
    else next()

  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:Router, 
  render: h =>h(App)
})
