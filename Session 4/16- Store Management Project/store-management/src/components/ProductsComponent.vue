<template>
  <div>
    <div class="container my-5 card">
      <div class="card-header row">
        <h1
          class="display-4"
        >{{ currentComponentTitle }} {{ products.length ? `(${products.length})` : '' }}</h1>
      </div>

      <table class="table table-hover product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Currency</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" track-by="id" :key="product.id">
            <td>{{product.Name}}</td>
            <td>{{product.Price}}</td>
            <td>{{product.Unit}}</td>
            <td>
              <!-- Call to action buttons -->
              <ul class="list-inline m-0 float-right">
                <li class="list-inline-item" v-haspermission="'update_product'">
                  <button
                    class="btn btn-success btn-sm"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i class="fa fa-edit" @click="$router.push('/product/'+ product.Id)">Edit</i>
                  </button>
                </li>

                <li class="list-inline-item" v-haspermission="'delete_product'">
                  <button
                    class="btn btn-danger btn-sm"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete"
                  >
                    <i class="fa fa-trash" @click="deleteProduct(product.Id)">Delete</i>
                  </button>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        v-haspermission="'create_product'"
        class="btn btn-success btn-sm my-4"
        type="button"
        data-toggle="tooltip"
        data-placement="top"
        title="Edit"
      >
        <i class="fa fa-edit" @click="$router.push('/product')">Create</i>
      </button>
    </div>

    <hr />

    <br />
  </div>
</template>

<script>
import AppEventBus from "../main.js";
import * as productsService from "../core/https/ProductsServices";

export default {
  data() {
    return {
      products: []
    };
  },

  methods: {
    deleteProduct(id) {
      if (this.products) {
        this.products = this.products.filter(p => p.Id != id);
      }
    }
  },
  mounted: function() {
    productsService.fetchProducts().then(result => {
      console.log(result.body);
      this.products = result.body;
    });

    AppEventBus.$emit("pageTitleUpdated", "Products");
  }
};
</script>