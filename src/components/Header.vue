<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="heder-top">
          <div
            class="logo wow fadeInDownBig animated animated"
            data-wow-delay="0.4s"
          >
            <h2 class="title">
              <router-link to="/">{{ companyDesc.uname }}</router-link>
              <div class="status">
                <img
                  :src="avatarIcon"
                  class="avatarIcon"
                  @click="changeAvatar"
                />

                <span class="nicname" @click="showUp" >{{
                  this.userInfo.uid ? userInfo.uname : "请登录"
                }}</span>

                <span @click="signin">{{
                  this.userInfo.uid ? "注销" : "登录"
                }}</span>
                <span v-show="!this.userInfo.uid" @click="signup">注册</span>
              </div>
            </h2>
          </div>

          <div class="nav-icon">
            <a
              href="javascript:;"
              id="navicon"
              class="navicon"
              @click="toggle"
            ></a>
            <div id="toggle" class="toggle">
              <ul class="toggle-menu">
                <li v-for="(item, index) of rou" :key="index">
                  <router-link :to="item.to">{{ item.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div
          class="banner-text wow fadeInLeft animated animated"
          data-wow-delay="0.4s"
        >
          <h3>{{ title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mutations, mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "我们是一个有创意的室内设计工作室",
      rou: [
        { to: "/", name: "Home" },
        { to: "about", name: "About" },
        { to: "services", name: "Services" },
        { to: "gallery", name: "Gallery" },
        { to: "register", name: "Register" },
        { to: "login", name: "Login" },
        { to: "messageBoard", name: "留言墙" },
      ],
      isToggle: false,
      checkUpdate: false,
    };
  },
  created() {
    console.log(this.userInfo);
  },
  computed: {
    ...mapState(["companyDesc", "userInfo"]),
    avatarIcon() {
      console.log(this.axios.defaults.baseURL + this.userInfo.avatar);
      if (this.userInfo.avatar) {
        return this.axios.defaults.baseURL + this.userInfo.avatar;
      } else {
        return require('../assets/images/yonghu.png')
      }
    },
  },
  methods: {
    // 改变头像
    changeAvatar() {
      this.$router.push("/avatar");
    },
    ...mapMutations(["setUserInfo"]),
    // 显示修改资料栏
    showUp() {
      if(this.userInfo.uid){
      this.$router.push("/update");
      }else{
        this.$message('请登录')
      }
    },

    // 注册
    signup() {
      this.$router.push("/register");
    },
    // 登录 或注销
    signin() {
      if (this.userInfo.uid) {
        let info = {};
        this.$store.commit("setUserInfo", info);
      } else {
        this.$router.push("/login");
      }
    },
    toggle() {
      this.isToggle = !this.isToggle;
      let nav = document.getElementById("navicon");
      let tog = document.getElementById("toggle");
      if (this.isToggle) {
        nav.classList.add("navicon--active");
        tog.classList.add("toggle--active");
      } else {
        nav.classList.remove("navicon--active");
        tog.classList.remove("toggle--active");
      }
      // $("#nav").toggleClass("navicon--active");
      // $("#toggle").toggleClass("toggle--active");
    },
  },
};
</script>

<style scoped>
@import "../../public/css/styles.css";
.header {
  background: url(../../src/assets/images/6.jpg) no-repeat 0px 0px;
  width: 100%;
  background-size: cover;
  min-height: 832px;
  display: block;
}
.title {
  width: 800px;
  display: flex;
  justify-content: space-between;
}

.status span {
  color: #fff;
  font-size: 2rem;
  width: 6rem;
  height: 3rem;
  background: #00fa9a;
  margin: 0 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
.status {
  position: relative;
  width: 400px;
}

.updateInfo {
  list-style: none;
  width: 15rem;
  position: absolute;
  left: 12%;
  top: 4rem;
  display: none;
}
.updateInfo span {
  padding: 0.5rem;
  color: #fff;
  font-size: 1rem;
}
/**头像 */
.avatarIcon:hover {
  cursor: pointer;
}
/**头像大小 */
.avatarIcon{
  height: 3rem;width:3rem;
  border-radius: 1.5rem;
}
</style>
