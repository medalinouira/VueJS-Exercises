/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

var accessMode = 'Create';

var userData = accessMode.toLowerCase() === "create" ? {
    firstName: "",
    lastName: ""
} : {
    firstName: "My Name",
    lastName: "My Last Name"
};

var createVM = new Vue({
    el: "#userForm",
    data: userData,

    methods: {
        getActionName: function() {
            return (accessMode.toLowerCase() === "create" ? "Créer" : "Modifer");
        },

        submit: function() {
            console.log(JSON.stringify(this.$data));
        }
    },
});

console.log(createVM);

var app = new Vue({
    el: '#app',
    data: {
        title: "Vue Js Bindings",
        description: "<strong>Vue JS Bindings Sample App</strong>",
        siteUrl: "https://www.mohamedalinouira.com"
    },

    methods: {
        getTitle: function() {
            return this.title;
        },

        updateTitle: function() {
            this.title = "New Title !"
        },

        showData: function() {
            console.log(this.title);
        }
    }
})