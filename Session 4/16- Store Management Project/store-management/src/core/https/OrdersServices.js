import Vue from 'vue'

export function fetchOrders(){
    return Vue.http.get('orders/');
}

export function getOrderById(orderId) {
    return Vue.http.get(`orders/${orderId}`);
}

export function createOrder(order) {
    return Vue.http.post('orders', order);
}

export function updateOrder(order) {
    return Vue.http.put(`orders/${order.id}`, order);
}

export function deleteOrder(orderId) {
    return Vue.http.delete(`orders/${orderId}`);
}