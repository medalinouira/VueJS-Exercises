/*
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

var title = "Hello World !";

Vue.component('hello-world', {
    data: () => {
        return {
            title: title
        }
    },
    template: `<div>
                   <p>{{ title }}</p> 
                   <button @click="updateTitle()">Update Title</button>
                   </div>`,


    methods: {
        updateTitle() {
            title = 'Title Updated';
        }
    }
});

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

var vm1 = new Vue({
    el: '#vue1',
    directives: {

    },

    components: {
        'sample-component': {
            data: () => {
                return {
                    title: 'Hello Sample Component !'
                }
            },
            template: `<div>
                   <p>{{ title }}</p> 
                   <button @click="title = 'Title Updated'">Update Title</button>
                   </div>`,

            methods: {

            }
        }
    },

    data: {

    },
    methods: {}
})

var vm2 = new Vue({
    el: '#vue2',
    data: {},
    methods: {}
})