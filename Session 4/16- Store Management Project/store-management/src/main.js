/*
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

//#region Imports
import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import OrdersComponent from './components/OrdersComponent.vue'
import WelcomeComponent from './components/WelcomeComponent.vue'
import ProductComponent from './components/ProductComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue'
import NotFoundComponent from './components/NotFoundComponent.vue'
import CustomerComponent from './components/CustomerComponent.vue'
import CustomersComponent from './components/CustomersComponent.vue'
import UnAuthorizedComponent from './components/UnAuthorizedComponent.vue'
//#endregion

//#region Uses
Vue.use(VueToast);
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(BootstrapVue)
    //#endregion

//#region Configs
Vue.prototype.currentPageTitle = '';

Vue.http.options.root = 'https://aspnetcore-templates-cleanarchitecture.azurewebsites.net/api/v2.0/'

let admin = {
    id: 1,
    email: "admin@storemanagement.com",
    password: "admin",
    permissions: ["create_product", "update_product", "delete_product"]
}

let guest = {
    id: 1,
    email: "guest@storemanagement.com",
    password: "guest",
    permissions: ["update_product"]
}

Vue.prototype.currentUser = null;
Vue.prototype.users = [admin, guest];
//#endregion

//#region Routes
export const routes = [
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent },
    {
        path: '/',
        alias: '/home',
        component: HomeComponent,
        children: [
            { path: '/', alias: '/home', component: WelcomeComponent },
            { path: '/products', component: ProductsComponent },
            { path: '/product/:id', component: ProductComponent },
            { path: '/product', component: ProductComponent },
            { path: '/customers', component: CustomersComponent },
            { path: '/customers/:id', component: CustomerComponent },
            { path: '/orders', component: OrdersComponent },
        ]
    },


    { path: '*', redirect: '/notfound' },
    { path: '/notfound', component: NotFoundComponent },
    { path: '/unauthorized', component: UnAuthorizedComponent },
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
    bind(el, binding, vnode) {
        var requiredPermission = binding.value;
        var currentUserPermissions = Vue.prototype.currentUser.permissions;
        var isCurrentUserHasPermission = currentUserPermissions.includes(requiredPermission);

        console.log(`Required permission: ${requiredPermission}`);
        console.log(`Current User Permissions: ${currentUserPermissions}`);
        console.log(`Is Current User Has Permission : ${isCurrentUserHasPermission}`);

        if (!isCurrentUserHasPermission) {
            var emptyComment = document.createComment('');
            Object.defineProperty(emptyComment, 'setAttribute', { value: () => undefined });

            vnode.text = '';
            vnode.tag = undefined;
            vnode.isComment = true;
            vnode.elm = emptyComment;
            vnode.context = undefined;
            vnode.data.directives = undefined;

            if (vnode.componentInstance) {
                vnode.componentInstance.$el = emptyComment;
            }

            if (el.parentNode) {
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
    render: h => h(App),
    mounted: function() {
        AppEventBus.$on("currentComponentTitleUpdated", currentComponentTitle => {
            Vue.prototype.currentComponentTitle = currentComponentTitle;
        });
    }
})