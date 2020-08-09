/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

var app = new Vue({

    el: '#app',

    data: {
        title: "Vue JS Instance Lifecycle"
    },

    methods: {
        updateTitle: function(event) {
            this.title = "New Title";
        },

        destroyInstance: function() {
            this.$destroy();
        }
    },

    beforeCreate: function() {
        console.log("beforCreate");
    },

    created: function() {
        console.log("created");
    },

    beforeMount: function() {
        console.log("beforeMount");
    },

    mounted: function() {
        console.log("mounted");
    },

    beforeUpdate: function() {
        console.log("beforeUpdate");
    },

    updated: function() {
        console.log("updated");
    },

    beforeDestroy: function() {
        this.title = '';
        console.log("beforeDestroy");
    },

    destroyed: function() {
        console.log("destroyed");
    }
})