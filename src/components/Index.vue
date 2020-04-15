<template>
  <div>
    <Header></Header>
    <!--header-->
    <div class="content">
      <div class="welcome-section">
        <div class="container">
          <h2>欢迎光临</h2>
          <span>{{title}}</span>
          <div class="welcome-grids">
            <div
              class="col-md-4 wel-grid wow fadeInLeft animated animated"
              data-wow-delay="0.4s"
              v-for="(item, index) in scheme"
              :key="index"
            >
              <img :src="URL+item.pic" class="img-responsive" alt />
              <div class="wel-text hvr-shutter-out-horizontal">
                <h4>{{item.title}}</h4>
                <p>{{item.descs}}</p>
              </div>
            </div>

            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div
        class="services wow bounceIn animated"
        data-wow-delay="0.4s"
        style="visibility: visible; -webkit-animation-delay: 0.4s;"
      >
        <div
          class="col-md-4 services-grids wow zoomIn animated classical"
          :data-wow-delay="index==0?'':'.5s'"
          v-for="(item, index) in classical"
          :key="index"
        >
          <div class="flip-effect right">
            <div class="text-box">
              <i :class="[{glyphicon:true},classicalIclass[index]]" aria-hidden="true"></i>
              <h5>{{item.title}}</h5>
              <p class="classicalDesc">{{item.descs}}</p>
            </div>
            <div class="info-box">
              <div class="info-content">
                <img :src="URL+item.pic" class="img-responsive" alt />
              </div>
            </div>
          </div>
        </div>

        <div class="clearfix"></div>
      </div>
      <div class="capabilities">
        <div class="container">
          <h3>内部功能</h3>
          <div class="capabil-grids">
            <div
              class="col-md-3 capabil-grid wow fadeInLeft animated animated"
              data-wow-delay="0.4s"
              v-for="(item, index) in interiors"
              :key="index"
            >
              <div class="cap">
                <div
                  class="numscroller numscroller-big-bottom"
                  data-slno="1"
                  data-min="0"
                  data-max="57000"
                  data-delay=".5"
                  data-increment="100"
                >{{item.num}}</div>
              </div>
              <h5>{{item.title}}</h5>
            </div>

            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div class="testimonial">
        <div class="container">
          <div class="testimonial-grids">
            <div
              class="col-md-4 testimonial-grid wow fadeInLeft animated animated"
              data-wow-delay="0.4s"
            >
              <h3>客户反馈</h3>
              <div class="testimonial-info" v-for="(item, index) in feedback" :key="index">
                <p>
                  <span>"</span>
                  {{item.descs}}
                </p>
                <h5>{{item.users}}</h5>
              </div>
            </div>
            <div
              class="col-md-8 testimonial-grid-right wow fadeInRight animated animated"
              data-wow-delay="0.4s"
            >
              <h3>最新作品</h3>
              <div class="works-grids">
                <div class="col-md-4 works-grid" v-for="(item, index) in newest" :key="index">
                  <img :src="URL+item.pic" class="img-responsive" alt />
                  <p>{{item.descs}}</p>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: "我们的公司为您提供最佳的设计方案，使您的家庭内部独特和时尚",
      background: [],
      scheme: [],
      classical: [],
      interiors: [],
      feedback: [],
      newest: [],
      classicalIclass: [
        "glyphicon-user",
        "glyphicon-bell",
        "glyphicon-wrench",
        "glyphicon-home",
        "glyphicon-lock",
        "glyphicon-shopping-cart"
      ]
    };
  },
  created() {
    this.loadMore();
    console.log(this.URL);
  },
  methods: {
    // 获取首页数据
    loadMore() {
      this.axios.get("/index").then(res => {
        console.log(res.data);
        this.background = res.data.background;
        this.scheme = res.data.scheme;
        this.classical = res.data.classical;
        this.interiors = res.data.interiors;
        this.feedback = res.data.feedback;
        this.newest = res.data.newest;
      });
    }
  },
  computed: {
    ...mapState(["URL"])
  }
};
</script>

<style scope>
.classical {
  height: 300px;
  overflow: hidden;
}
.classicalDesc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>