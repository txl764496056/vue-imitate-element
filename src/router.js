import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/radio',
      name: 'radio',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components:{
        'el-router-view':() => import('./el_views/ElementRadio.vue'),
        'im-router-view': () => import('./views/ImitateRadio.vue')
      }
    },
    {
      path:'/checkbox',
      name:'checkbox',
      // component: () => import('./views/Checkbox.vue')
      components:{
        'el-router-view':() => import('./el_views/ElementCheckbox.vue'),
        'im-router-view':() => import('./views/ImitateCheckbox.vue')
      }
    }
  ]
})
