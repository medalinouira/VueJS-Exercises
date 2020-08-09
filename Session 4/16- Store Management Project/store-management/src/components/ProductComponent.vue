<template>
  <form class="container card my-5">
    <h1 class="display-4">{{ currentPageTitle }}</h1>
    <hr />
    <div class="form-group">
      <label for="productName">Name</label>
      <input
        type="text"
        v-model="product.name"
        class="form-control"
        id="productName"
        maxlength="32"
        placeholder="Product name"
      />
    </div>

    <div class="form-group">
      <label for="price">Price</label>
      <input
        type="number"
        v-model="product.price"
        class="form-control"
        id="price"
        placeholder="Price"
        number
      />
    </div>
    <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">Save product</button>
    <br />
    <hr />
  </form>
</template>

<script>
import AppEventBus from "../main";

export default {
  data: function() {
    return {
      product: {}
    };
  },
  methods: {
    onSubmit() {}
  },

  mounted: function() {
    console.log(this);
    console.log(this.$route.params);

    if (this.$route.params.id) {
      this.product = {
        id: "08afd7c8-ea42-47e7-b10e-37435772f20f",
        name: "Product 1",
        price: 323,
        unit: "euro"
      };
    }

    AppEventBus.$emit("pageTitleUpdated", "Product " + this.product.name);
  }
};
</script>