import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/businesssignup',
      name: 'BusinessSignUp',
      component: () => import('./views/BusinessSignUp.vue')
    },
    {
      path: '/usersignup',
      name: 'UserSignUp',
      component: () => import('./views/UserSignUp.vue')
    },
    {
      path: '/businesses/:businessID',
      name: 'BusinessProfile',
      component: () => import('./views/BusinessProfile.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
        path: '/map',
        name: 'Map',
        component: () => import('./views/Map.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('./views/Settings.vue')
  }
  ]
})
