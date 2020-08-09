/// Mohamed Ali NOUIRA
/// http://www.mohamedalinouira.com
/// https://github.com/medalinouira
/// Copyright © Mohamed Ali NOUIRA. All rights reserved.

var app = new Vue({
    el: '#app',
    data: {
        title: "Vue JS Events",
        counts: 0
    },
    methods: {
        incrementClicks: function(event) {
            console.log(event);
            this.counts++;
        },

        incrementClicksByStep: function(step, event) {
            console.log(event);
            this.counts += step;
        },

        mouseMoved: function(event) {
            console.log(event);
        }
    }
})