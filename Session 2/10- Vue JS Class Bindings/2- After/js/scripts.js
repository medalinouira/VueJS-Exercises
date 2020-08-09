/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

new Vue({
    el: '#app',

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