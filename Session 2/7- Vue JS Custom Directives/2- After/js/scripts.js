/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

//#region Directives
Vue.directive('gray', {
    bind(el, binding, vnode) {
        console.log("el: ");
        console.log(el);

        console.log("Binding: ");
        console.log(binding);

        console.log("vnode: ")
        console.log(vnode);

        el.style.color = 'white';
        el.style.backgroundColor = 'gray';
    }
});

Vue.directive('backgroundcolor', {
    bind(el, binding, vnode) {
        el.style.color = "white";
        el.style.backgroundColor = binding.value;
    }
});

Vue.directive('mystyle', {
    bind(el, binding, vnode) {
        console.log("Binding: ");
        console.log(binding);

        switch (binding.arg) {
            case 'color':
                el.style.color = binding.value;
                break;
            case 'backgroundcolor':
                el.style.color = 'white';
                el.style.backgroundColor = binding.value;
                break;
            default:
                break;
        }
    }
});

Vue.directive('myconfigurablestyle', {
    bind(el, binding, vnode) {
        // Get Arg
        switch (binding.arg) {
            case 'color':
                el.style.color = binding.value;
                break;
            case 'backgroundcolor':
                el.style.color = 'white';
                el.style.backgroundColor = binding.value;
                break;
            default:
                break;
        }

        console.log(binding);

        // Get Modifiers
        if (binding.modifiers['opacity']) {
            el.style.opacity = 0.1;
        }

        if (binding.modifiers['border']) {
            el.style.border = "10px solid #000000";
        }

        let modifiers = binding.modifiers;
        console(modifiers.getOwnPropertyNames(modifiers).length);

        if (modifiers.getOwnPropertyNames(modifiers).length > 0) {
            el.innerText = "Zero Modifiers";
        }

    }
});

Vue.directive('showv2', {
    bind(el, binding, vnode) {
        console.log("showv2 : ");
        console.log(binding.value);

        var displayMode = binding.value == 'true' ? '' : 'none';
        el.style.display = displayMode;
    }
});

Vue.directive('count', {
    bind(el, binding, vnode) {
        console.log("v-count value: ");
        console.log(binding.value);

        if (Number(binding.value) <= 0) {
            var emptyComment = document.createComment('')
            Object.defineProperty(emptyComment, 'setAttribute', { value: () => undefined });

            vnode.elm = emptyComment;
            if (vnode.componentInstance) {
                vnode.componentInstance.$el = emptyComment;
            }
        }
    }
});

//#region v-haspermissions
// Standard : OpenId Connect = id_token / access_token : scope(products)

// Scope
// Claims

var permissions = ["create_product", "update_product", "delete_product"];

var userContext = {
    userName: "YOU-NAME",
    permissions: ["create_product", "update_product"]
}

Vue.directive('haspermissions', {
    bind(el, binding, vnode) {

        console.log("haspermissions value: ");
        console.log(binding.value);

        console.log("User permissions: ");
        console.log(userContext.permissions);

        if (!userContext.permissions.includes(binding.value)) {
            var emptyComment = document.createComment('')
            Object.defineProperty(emptyComment, 'setAttribute', { value: () => undefined });

            vnode.elm = emptyComment;
            if (vnode.componentInstance) {
                vnode.componentInstance.$el = emptyComment;
            }
        }
    }
});
//#endregion

//#endregion

var app = new Vue({
    //#region Configuration
    el: '#app',
    data: {
        title: "Vue Js Directives",
        description: "Description",
        isTitleInclude: false,
        isTitleVisible: false,
        products: [{
                "Id": "6ec1d027-5be0-4657-8643-a843ed3ae7d2",
                "Name": "Product 1",
                "Price": 323,
                "Unit": "euro",
                "itemsCount": 5
            },
            {
                "Id": "99ea6415-8c9b-497b-a348-510d4039499c",
                "Name": "Product 2",
                "Price": 400,
                "Unit": "euro",
                "itemsCount": 5
            },
            {
                "Id": "3b8b7cc2-c961-4938-b1ff-4763d3ef6024",
                "Name": "Product 3",
                "Price": 234,
                "Unit": "euro",
                "itemsCount": 0
            },
            {
                "Id": "2f9a60c5-2a17-4af9-9466-9f96e87eb588",
                "Name": "Product 4",
                "Price": 120,
                "Unit": "euro",
                "itemsCount": 5
            },
            {
                "Id": "461ef325-14c3-4ff6-8bbb-fa2399e07a39",
                "Name": "Product 5",
                "Price": 850,
                "Unit": "euro",
                "itemsCount": 0
            },
            {
                "Id": "2f089a53-dfac-4cd1-8e3d-db0493a7d295",
                "Name": "Product 6",
                "Price": 43,
                "Unit": "euro",
                "itemsCount": 5
            },
            {
                "Id": "60bc915c-b078-4534-8944-93ca3f5e6b31",
                "Name": "Product 7",
                "Price": 165,
                "Unit": "euro",
                "itemsCount": 5
            },
            {
                "Id": "7af8f813-b076-4147-9c14-a2721ee9e523",
                "Name": "Product 8",
                "Price": 549,
                "Unit": "euro",
                "itemsCount": 0
            }
        ]
    },
    //#endregion

    //#region Methods
    methods: {
        updateTitleInclusion: function(event) {
            this.isTitleInclude = !this.isTitleInclude;
        },

        updateTitleVisibility: function(event) {
            this.isTitleVisible = !this.isTitleVisible;
        }
    }
    //#endregion
});

var directiveApp = new Vue({
    el: "#directiveapp",

    //#region Directives
    directives: {
        'directiveappshow': {
            bind(el, binding, vnode) {
                console.log("showv2 : ");
                console.log(binding.value);

                var displayMode = binding.value == 'true' ? '' : 'none';
                el.style.display = displayMode;
            }
        }
    },
    //#endregion
});