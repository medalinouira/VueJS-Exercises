import Vue from 'vue'

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'

import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'


Vue.use(BootstrapVue)
Vue.use(VueRouter);

const routes = [ 
  { path: '', component: HomeComponent },
  { path: '/', component: HomeComponent },
  { path: '*', redirect: '/' },

  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
  
  { path: '/home', alias: '/', component: HomeComponent, children: [
    { path: '/products', component: undefined },
    { path: '/products/:id', component: undefined },
    { path: '/customers', component: undefined },
    { path: '/customers/:id', component: undefined },
    { path: '/orders', component: undefined },
  ]},
  
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  components:{
    HomeComponent,
    LoginComponent,
    RegisterComponent
  },
  render: h => h(App)
})
