<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="heder-top">
          <div class="logo wow fadeInDownBig animated animated" data-wow-delay="0.4s">
            <h1>
              <router-link to="/">Interior Plus</router-link>
            </h1>
          </div>
          <div class="nav-icon">
            <a href="javascript:;" class="navicon" @click="toggle"></a>
            <div class="toggle">
              <ul class="toggle-menu">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="about">About</router-link>
                </li>
                <li>
                  <router-link to="services">Services</router-link>
                </li>
                <li>
                  <router-link to="gallery">Gallery</router-link>
                </li>
                <li>
                  <router-link to="codes">Codes</router-link>
                </li>
                <li>
                  <router-link to="contact">Contact</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="banner-text wow fadeInLeft animated animated" data-wow-delay="0.4s">
          <h3>We are a Creative Interior Design Studio</h3>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit consectetur adipiscing elit Mauris</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle(e) {
      $(".navicon").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("navicon--active");
        $(".toggle").toggleClass("toggle--active");
      });
    }
  }
};
</script>

<style >
@import "../../public/css/styles.css";
</style>