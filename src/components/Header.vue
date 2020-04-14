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
            <a href="javascript:;" id="navicon" class="navicon" @click="toggle"></a>
            <div id="toggle" class="toggle">
              <ul class="toggle-menu">
                <li v-for="(item, index) of rou" :key="index">
                  <router-link :to="item.to">{{item.name}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="banner-text wow fadeInLeft animated animated" data-wow-delay="0.4s">
          <h3>{{title}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我们是一个有创意的室内设计工作室",
      rou: [
        { to: "/", name: "Home" },
        { to: "about", name: "About" },
        { to: "services", name: "Services" },
        { to: "gallery", name: "Gallery" }
      ],
      isToggle:false
    };
  },
  methods: {
    toggle() { 
      this.isToggle = !this.isToggle
      let nav = document.getElementById('navicon');
      let tog = document.getElementById('toggle');
      if(this.isToggle){
        nav.classList.add('navicon--active');
        tog.classList.add('toggle--active');
      }else{
        nav.classList.remove('navicon--active');
        tog.classList.remove('toggle--active');
      }    
      // $("#nav").toggleClass("navicon--active");      
      // $("#toggle").toggleClass("toggle--active");
    }
  }
};
</script>

<style >
@import "../../public/css/styles.css";
</style>