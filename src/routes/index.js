import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import Home from '../page/index'
import List from '../page/list'
import Profile from '../page/profile'
import Statistics from '../page/statistics'
import Out from '../page/index'
import Acsess from '../page/profile'


export default new VueRouter ({
  routes: [{
    path: '',
    name: 'home',
    component: Home
  }, {
    path: '/list',
    name: 'list',
    component: List
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile
  }, {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  },
  {
    path:'/index',
    name:'out',
    component: Out
  },
  {
    path:'/list',
    name:'acsess',
    component: Acsess
}],
  mode: 'history'
})