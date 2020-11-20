import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BusinessProfile',
      component: () => import('./views/BusinessProfile.vue')
    }
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: () => import('./views/Profile.vue')
    // },
    // {
    //   path: '/account',
    //   name: 'account',
    //   component: () => import('./views/Account.vue')
    // }
  ]
})