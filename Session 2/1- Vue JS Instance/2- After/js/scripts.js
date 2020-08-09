/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

// API Call
var data = {
    title: "Exercice 1 : VueJS Instance",
    description: "Sample VueJS Instance App"
};

var myVueInstanceObject = {

    el: '#ex1',
    data: data,

    // Methods
    methods: {
        getDescription: function() {
            return this.description;
        }
    },

    // Computed 
    computed: {
        titleText: {
            //Get Method
            get: function() {
                return this.title + ": Computed Value";
            },

            // Set Method
            set: function(value) {
                this.title = value;
            }
        },

        //Only Get Method
        descriptionText: function() {
            return this.description.toLowerCase() + " : Computed Value";
        }
    },

    // Watch
    watch: {
        title: function(value) {
            alert("New value: " + value);
        }
    }
};

var vm = new Vue(myVueInstanceObject);

vm.titleText = "Text changed !";
vm.title = "New title";

vm.newProperty = "New property";

console.log(vm);

vm.$refs.btnClickMe.onclick = () => { vm.$refs.exerciceTitle.innerHTML = "Update Click Me Content" };

var ExtendedVue = Vue.extend({
    props: ["message"],
    template: "<div> {{ message }} </div>"
});

var vm2 = new ExtendedVue({
    propsData: { message: "Mon message" }
});

vm2.$mount("#vue2");

console.log(vm.$refs);