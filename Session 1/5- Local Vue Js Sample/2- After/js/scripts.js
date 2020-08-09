/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

window.onload = function() {

    // Select element with Id 'title"
    new Vue({
        el: '#title',
        data: {
            title: 'My Local Vue.js App'
        }
    });

    // Select element with class 'subtitle"
    var vm = new Vue({
        el: '.subtitle',
        data: {
            subtitle: 'A Local Sample App'
        }
    });


    var data = {
        subtitle: 'A Local Sample App'
    }

    console.log(vm.$data === data);

    // Footer VM
    new Vue({
        el: '#footer',

        data: {
            creatorLastName: '',
            creatorFirstName: ''
        },

        methods: {

            setCreatorLastName: function(event) {
                this.creatorLastName = event.target.value;
            },

            setCreatorFirstName: function(event) {
                this.creatorFirstName = event.target.value;
            },

        }
    });
}