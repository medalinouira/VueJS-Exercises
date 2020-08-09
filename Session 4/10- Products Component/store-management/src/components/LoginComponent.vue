<template>
  <div class="container" align="center">
    <br />
    <h1 class="text-center">Store Management</h1>
    <hr />
    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">Log in</h4>

        <p class="divider-text">
          <span class="bg-light">Welcome To the Store Management</span>
        </p>

        <form>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <input name class="form-control" placeholder="Email address" type="email" v-model="email" />
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input class="form-control" placeholder="Password" type="password" />
          </div>
          <!-- form-group// -->
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary btn-block"
              @click="$router.push('home')"
            >Login</button>
          </div>
          <!-- form-group// -->
          <p class="text-center">
            Don't have an account?
            <router-link to="/register">Sign up here!</router-link>
          </p>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data : function(){
    return {
      email,
      password
    }
  },
  
  methods: {
    login(){      
      Vue.prototype.currentUser.userName = this.userName;
    }
  }
};
</script>

<style>
.divider-text {
  position: relative;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.divider-text span {
  padding: 7px;
  font-size: 12px;
  position: relative;
  z-index: 2;
}
.divider-text:after {
  content: "";
  position: absolute;
  width: 100%;
  border-bottom: 1px solid #ddd;
  top: 55%;
  left: 0;
  z-index: 1;
}

.btn-facebook {
  background-color: #405d9d;
  color: #fff;
}
.btn-twitter {
  background-color: #42aeec;
  color: #fff;
}
</style>

