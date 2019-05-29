import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'

import Login from 'components/login/Login.vue'
import Home from 'components/home/Home.vue'
import Earn from 'components/earn/index.vue'
import Save from 'components/save/index.vue'
import Me from 'components/me/index.vue'

import "../assets/styles/reset.scss"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        requireAuth: true
      },
      component: Home,

    },{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        requireAuth: true
      },
      component: Home
    },
    {
      path: '/earn',
      name: 'Earn',
      meta: {
        requireAuth: true
      },
      component: Earn
    },
    {
      path: '/save',
      name: 'Save',
      meta: {
        requireAuth: true
      },
      component: Save
    },
    {
      path: '/me',
      name: 'Me',
      meta: {
        requireAuth: true
      },
      component: Me
    },
    {
      path: "*",
      redirect: "/404"
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
// 58392e427bf2a0865f2a18781eb3a39ad5f25504
router.beforeEach( (to, from, next) => {
  if(to.meta.requireAuth) {
    if(store.state.token) {
      next()
    } else {
      /*next({
        path: "/login",
        query: {redirect: to.fullPath}
      })*/
      next()
    }
  }else{
    next()
  }
})

export default router
