<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Store Management</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">Home</router-link>

          <span class="sr-only">(current)</span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Customers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Orders</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-light my-2 my-sm-0" @click="$router.push('login')">Logout</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
  }
};
</script>