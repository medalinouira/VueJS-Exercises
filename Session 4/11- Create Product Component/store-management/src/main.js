import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://aspnetcore-templates-cleanarchitecture.azurewebsites.net/api/v2.0/'
Vue.http.headers.common['Access-Control-Allow-Origin'] = true
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.options.emulateJSON = true

const routes = [ 
  { path: '', component: HomeComponent },
  { path: '/', component: HomeComponent },
  { path: '*', redirect: '/' },

  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
  
  { path: '/home', alias: '/', component: HomeComponent, children: [
    { path: '/products', component: ProductsComponent },
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
