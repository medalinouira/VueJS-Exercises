<template>
  <div id="home">
    <!-- Header -->
    <app-header></app-header>

    <!-- Content -->
    <h1 class="container my-5 px-0">{{ pageTitle }}</h1>

    <router-view></router-view>

    <!-- Footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from "vue";
import AppEventBus from "../main.js";

import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";

export default {
  data: function() {
    return {
      pageTitle: "Home"
    };
  },

  methods: {
    showUserName(user) {
      alert(user.userName);
    }
  },

  components: {
    "app-header": HeaderComponent,
    "app-footer": FooterComponent
  },

  mounted: function() {
    console.log(Vue.prototype.currentUser.permissions);

    AppEventBus.$on("pageTitleUpdated", (currentComponentTitle) => { this.pageTitle = currentComponentTitle});
  }
};
</script>