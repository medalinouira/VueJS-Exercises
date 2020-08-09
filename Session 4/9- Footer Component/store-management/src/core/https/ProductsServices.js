import Vue from 'vue'

export function fetchProducts() {
    return Vue.http.get('products/');
}

export function getProductById(productId) {
    return Vue.http.get(`products/${productId}`);
}

export function createProduct(product) {
    return Vue.http.post('products', product);
}

export function updateProduct(product) {
    return Vue.http.put(`products/${product.id}`, product);
}

export function deleteProduct(productId) {
    return Vue.http.delete(`products/${productId}`);
}