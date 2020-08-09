<template>
  <div class="container">
    <br />
    <h1 class="text-center">Store Management</h1>
    <hr />

    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">Create Account</h4>
        

        <p class="divider-text">
          <span class="bg-light">Create your free account</span>
        </p>
        <form>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-user"></i>
              </span>
            </div>
            <input name class="form-control" placeholder="Full name" type="text" />
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <input name class="form-control" placeholder="Email address" type="email" />
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-phone"></i>
              </span>
            </div>
            <select class="custom-select" style="max-width: 120px;">
              <option selected>+971</option>
              <option value="1">+972</option>
              <option value="2">+198</option>
              <option value="3">+701</option>
            </select>
            <input name class="form-control" placeholder="Phone number" type="text" />
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-building"></i>
              </span>
            </div>
            <select class="form-control">
              <option selected>Select job type</option>
              <option>Designer</option>
              <option>Manager</option>
              <option>Accaunting</option>
            </select>
          </div>
          <!-- form-group end.// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input class="form-control" placeholder="Create password" type="password" />
          </div>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input class="form-control" placeholder="Repeat password" type="password" />
          </div>
          <!-- form-group// -->
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Create Account</button>
          </div>
          <!-- form-group// -->
          <p class="text-center">
            Have an account?
            <router-link to="/login">Log In!</router-link>
          </p>
        </form>
      </article>
    </div>
    <!-- card.// -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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