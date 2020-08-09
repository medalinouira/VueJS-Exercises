/*
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

Vue.component('text-content', {
    data: () => {
        return {
            title: title
        }
    },

    template: `<div>
                   <p>{{ text }}</p>                   
                   </div>`,

    props: ["text"],

    methods: {}
});

var vm2 = new Vue({
    el: '#app',
    data: {
        message: "Binded : Hello From Text Content Component !"
    },
    methods: {}
})