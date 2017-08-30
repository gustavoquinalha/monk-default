import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import beforeEach from './beforeEach'
import afterEach from './afterEach'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: require('pages/home'),
      menuView: require('components/header'),
      // sidebarView: require('components/sidebar')
    },
    meta: {
      title: "Dashboard",
      auth: true
    }
  },
  {
    path: '/book1/u03',
    name: 'book1u03',
    components: {
      // default: require('pages/unit/words/'),
      default: require('pages/unit/'),
      menuView: require('components/header'),
      sidebarView: require('components/sidebar')
    },
    meta: {
      title: "Words attack",
      auth: true
    }
  },
  {
    path: '/a',
    name: 'a',
    components: {
      default: require('pages/home'),
      menuView: require('components/header')
    },
    meta: {
      title: "Dashboard",
      auth: true
    }
  },

  {
    path: '/login',
    name: 'login',
    components: {
      fullView: require('pages/user/login')
    },
    meta: {
      title: "Login",
      auth: false
    }
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    components: {
      fullView: require('pages/user/cadastro')
    },
    meta: {
      title: "Cadastro",
      auth: false
    }
  },
  {
    path: '',
    redirect: '/'
  }
  ,
  {
    path: '*',
    name: 'notPage',
    components: {
      fullView: require('pages/error/404')
    }
    ,
    meta: {
      title: "Error 404",
      auth: false
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history', // default: hash ,history
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)


export default router
