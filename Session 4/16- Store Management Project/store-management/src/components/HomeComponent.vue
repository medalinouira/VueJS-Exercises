<!--
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
-->

<template>
  <div id="home">
    <!-- Header -->
    <app-header></app-header>
    
    <!-- Content -->
    <router-view></router-view>

    <!-- Footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";

export default {
  components: {
    "app-header": HeaderComponent,
    "app-footer": FooterComponent
  },  
};
</script>