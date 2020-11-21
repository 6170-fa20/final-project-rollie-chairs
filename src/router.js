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
      path: '/businesses/:businessID',
      name: 'BusinessProfile',
      component: () => import('./views/BusinessProfile.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    }
  ]
})