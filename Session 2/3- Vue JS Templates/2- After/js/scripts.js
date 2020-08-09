/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

var vueJsHTMLTemplate = new Vue({
    el: '#vueJsHTML',

    data: {
        productName: 'Mobile phone',
        itemsCount: 5,
        availableProductsCount: 5,
        productStatusColor: 'green',

        customer: {
            email: '',
            fullName: '',
            phonenumber: ''
        }
    },

    methods: {
        updateItemsCount: function(event) {
            this.itemsCount = event.target.value !== null ? event.target.value : this.itemsCount;
        },

        showCustomerInformation: function() {
            console.log(this.customer);
        }
    },

    computed: {
        computedProductStatusStyle: function() {
            return {
                color: this.itemsCount > 0 ? 'green' : 'red'
            }
        },

        computedProductStatusClass: function() {
            return this.itemsCount > 0 ? 'greenText' : 'redText'
        }
    },

    // Watch
    watch: {
        availableProductsCount: function(value) {
            this.productStatusColor = value != null && value > 0 ? 'green' : 'red';
        }
    }

});

var vueJsEl = new Vue({
    el: '#vueJsEl',
    data: {
        title: 'Vue JS Instance Templates : By Template Property'
    },
    template: '<h3> {{ title }} </h3>'
});

var vueJsMount = new Vue({
    data: {
        title: "Vue JS Instance Templates : By Mount Method"
    },
    template: '<h4> {{ title }} </h4>'
});

vueJsMount.$mount("#vueJsMount");