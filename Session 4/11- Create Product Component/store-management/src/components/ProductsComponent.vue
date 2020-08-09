<template>
  <div class="container card my-5">
    <div class="card-header row">
      <h1>Products</h1>
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
          <td>{{product.name}}</td>
          <td>{{product.Price}}</td>
          <td>{{product.Unit}}</td>
          <td>
            <!-- Call to action buttons -->
            <ul class="list-inline m-0 float-right">
              <li class="list-inline-item">
                <button
                  class="btn btn-success btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Edit"
                >
                  <i class="fa fa-edit">Edit</i>
                </button>
              </li>

              <li class="list-inline-item">
                <button
                  class="btn btn-danger btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete"
                >
                  <i class="fa fa-trash">Delete</i>
                </button>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

      <button
        class="btn btn-success btn-sm my-4"
        type="button"
        data-toggle="tooltip"
        data-placement="top"
        title="Edit"
      >
        <i class="fa fa-edit">Create</i>
      </button>

  </div>
  
</template>

<script>
import * as productsService from "../core/https/ProductsServices";

export default {
  data() {
    return {
      products: [
        {
          id: "08afd7c8-ea42-47e7-b10e-37435772f20f",
          name: "Product 1",
          Price: 323,
          Unit: "euro"
        },
        {
          id: "c892918f-a5e0-42a7-b043-d528d7375f88",
          name: "Product 2",
          Price: 400,
          Unit: "euro"
        },
        {
          id: "fe1cdeea-a863-4a81-8e67-0fccf5c14f6c",
          name: "Product 3",
          Price: 234,
          Unit: "euro"
        },
        {
          id: "924eb2aa-6823-4fe3-9469-a3b8c1f9714a",
          name: "Product 4",
          Price: 120,
          Unit: "euro"
        },
        {
          id: "30670fe9-c58d-4fe4-a1fe-7ad3311d867c",
          name: "Product 5",
          Price: 850,
          Unit: "euro"
        },
        {
          id: "63d193b8-0821-4f06-9178-ea112b322c9d",
          name: "Product 6",
          Price: 43,
          Unit: "euro"
        },
        {
          id: "2aee7826-f521-4b24-b30e-373e787b38e5",
          name: "Product 7",
          Price: 165,
          Unit: "euro"
        },
        {
          id: "d4a4a127-6895-4069-b92c-aa2e4e54bad5",
          name: "Product 8",
          Price: 549,
          Unit: "euro"
        }
      ]
    };
  },

  created: () => {
    productsService.fetchProducts().then(result => {
      console.log(result);
      this.products = result;
    });
  }
};
</script>