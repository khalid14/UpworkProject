import Vue from 'vue'
import Router from 'vue-router'
import InnerTab from './components/inner-tab-1.1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InnerTab',
      component: InnerTab
    },
    {
        path: '/innerTab1.1',
        name: 'InnerTab',
        component: InnerTab
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
