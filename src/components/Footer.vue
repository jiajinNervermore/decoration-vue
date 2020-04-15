<template>
  <div>
    <div class="footer-section wow fadeInDownBig animated animated" data-wow-delay="0.4s">
      <div class="container">
        <div class="social-icons">
          <a href="#">
            <i class="icon"></i>
          </a>
          <a href="#">
            <i class="icon1"></i>
          </a>
          <a href="#">
            <i class="icon2"></i>
          </a>
          <a href="#">
            <i class="icon3"></i>
          </a>
        </div>
        <div class="copy">
          <p>
            公司名: {{companyDesc.uname}} 
          </p>
          <p>
            <span>微信:{{companyDesc.wechat}} | </span>
            <span>qq:{{companyDesc.qq}} | </span>
            <span>联系电话:{{companyDesc.phone}} | </span>
            <span>新浪微博:{{companyDesc.weibo}} | </span>
            <span>邮箱:{{companyDesc.email}}</span>
          </p>
          <p>地址:{{companyDesc.addr}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      company: []
    };
  },
  computed: {
    ...mapState(["URL", "companyDesc"])
  },
  created(){
    this.loadMore();
  },
  methods:{
    ...mapMutations(["setCompany"]),
    loadMore() {
      this.axios
        .get("/about")
        .then(res => {      
					// 将公司的信息保存到vuex里面
          this.company = res.data.company;
          this.setCompany(this.company[0]);
          console.log(this.companyDesc)
					// 家具设计
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
};
</script>

<style>
</style>