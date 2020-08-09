import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(BootstrapVue)

Vue.http.options.root = 'https://aspnetcore-templates-cleanarchitecture.azurewebsites.net/api/v2.0/'

const routes = [ 
  { path: '/login', component: undefined },
  { path: '/register', component: undefined },
  { path: '/home', alias: '/', component: App },
  { path: '/products', component: undefined },
  { path: '/product', component: undefined },
  { path: '/customers', component: undefined },
  { path: '/customer', component: undefined },
  { path: '/orders', component: undefined },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
