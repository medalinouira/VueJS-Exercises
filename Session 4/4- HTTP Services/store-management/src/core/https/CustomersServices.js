import Vue from 'vue'

export function fetchCustomers() {
    return Vue.http.get('products/');
}

export function getCustomerById(customerId) {
    return Vue.http.get(`customers/${customerId}`);
}

export function createCustomer(customer) {
    return Vue.http.post('customers', customer);
}

export function updateCustomer(customer) {
    return Vue.http.put(`customers/${customer.id}`, customer);
}

export function deleteCustomer(customerId) {
    return Vue.http.delete(`customers/${customerId}`);
}