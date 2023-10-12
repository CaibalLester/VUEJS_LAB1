<template>
  <div>

    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="logo">
            <h1><img class="" :src="require('@/assets/assets/images/logo.png')"></h1>
          </div>
          <div class="menu-items">
              <ul id="links"><router-link to="/" tag="li" exact>Home</router-link></ul>
              <ul id="links"><router-link to="/login" tag="li" exact>LogIn</router-link></ul>
              <ul id="links"><router-link to="/shop_info" tag="li" exact>Shop Info</router-link></ul>
              <ul id="links"><router-link to="/about" tag="li" exact>About</router-link></ul>
              <ul id="links"><router-link to="/manage" tag="li" exact>Manage</router-link></ul>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">

                <p class="mb-4">Cycling can help to protect you from serious diseases such as stroke, heart attack, some
                  cancers, depression, diabetes, obesity and arthritis. </p>
                <p>
                <h5 href="/shop" class="btn btn-secondary me-2">Shop Now</h5>
                </p>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="hero-img-wrap">
                <img :src="require('@/assets/assets/images/img-5.png')" class="img-fluid">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
    
<script>
//Modified by Caibal
export default {
  name: "Top",
  data() {
    return {
      open: false,
    }
  },
  methods: {

    menubar: function () {
      if (this.open) {
        this.open = false;
        return this.open;
      } else {
        this.open = true;
        return this.open;
      }
    }
  },
};
//Ends
</script>
    