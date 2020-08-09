/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

new Vue({
    el: '#app',
    data: {
        index: 0,
        meter: 0
    },

    //Computed
    computed: {
        indexStatus: function() {
            return this.index > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    },

    //Watch
    watch: {
        index: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.index = 0;
            }, 5000);
        },

        meter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.meter = 0;
            }, 5000);
        }
    },

    //Method
    methods: {
        meterStatus: function() {
            return this.meter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    }
});