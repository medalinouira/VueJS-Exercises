<template>
  <div id="home">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';

export default {
  components:{
    "app-header": HeaderComponent
  }
}
</script>