//#region Imports
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
import ProductComponent from './components/ProductComponent.vue'
//#endregion

//#region Uses
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)
//#endregion

//#region Configs
Vue.http.options.root = 'https://aspnetcore-templates-cleanarchitecture.azurewebsites.net/api/v2.0/'

let userAdmin = {
  id: 1,
  name: "USER_NAME",
  permissions: ["create_product", "update_product", "delete_product"]
}

let userGuest = {
  id: 1,
  name: "USER_NAME",
  permissions: ["update_product"]
}

Vue.prototype.currentUser = userAdmin;
//#endregion

//#region Routes
export const routes = [
  { path: '', component: HomeComponent },
  { path: '/', component: HomeComponent },
  { path: '*', redirect: '/' },

  /*{ path: '*', component: NotFoundComponent },
  { path: '/unauthorized', component: NotAuthorizedComponent },*/

  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },

  {
    path: '/home', alias: '/', component: HomeComponent, children: [
      { path: '/products', component: ProductsComponent },
      { path: '/product/:id', component: ProductComponent },
      { path: '/product', component: ProductComponent },
      { path: '/customers', component: undefined },
      { path: '/customers/:id', component: undefined },
      { path: '/orders', component: undefined },
    ]
  },
]
const router = new VueRouter({
  routes
})
//#endregion

//#region EventBus
const AppEventBus = new Vue();
export default AppEventBus;
//#endregion

//#region Directives
Vue.directive('haspermission', {
  bind(el, binding, vnode){
    var requiredPermission = binding.value;
    var currentUserPermissions = Vue.prototype.currentUser.permissions;
    var isCurrentUserHasPermission = currentUserPermissions.includes(requiredPermission);

    console.log(`Required permission: ${requiredPermission}`);
    console.log(`Current User Permissions: ${currentUserPermissions}`);
    console.log(`Is Current User Has Permission : ${isCurrentUserHasPermission}`);

    if(!isCurrentUserHasPermission){
      var emptyComment = document.createComment('');
      Object.defineProperty(emptyComment, 'setAttribute', {value: ()=> undefined});

      vnode.text = '';
      vnode.tag = undefined;
      vnode.isComment = true;
      vnode.elm = emptyComment;
      vnode.context = undefined;
      vnode.data.directives = undefined;

      if(vnode.componentInstance){
        vnode.componentInstance.$el = emptyComment;
      }

      if(el.parentNode){
        el.parentNode.replaceChild(emptyComment, el);
      }
    }
  }
});
//#endregion

new Vue({
  el: '#app',
  router,
  components: {
    HomeComponent,
    LoginComponent,
    RegisterComponent
  },
  render: h => h(App)
})
