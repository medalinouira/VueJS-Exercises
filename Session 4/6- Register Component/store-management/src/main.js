import Vue from 'vue'

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'

import App from './App.vue'
import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'


Vue.use(BootstrapVue)
Vue.use(VueRouter);

const routes = [ 
  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
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
  components:{
    LoginComponent,
    RegisterComponent
  },
  render: h => h(App)
})
