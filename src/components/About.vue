<template>
  <div>
    <Header></Header>
    <div class="content">
      <div class="about-section">
        <div class="container">
          <h2>关于我们</h2>
          <div class="about-grids wow fadeInRight animated animated" data-wow-delay="0.4s">
            <div class="col-md-8 about-grid">
              <img :src="URL+lg" class="img-responsive" alt />
            </div>
            <div
              class="col-md-4 about-grid1 wow fadeInLeft animated animated"
              data-wow-delay="0.4s"
            >
              <img :src="URL+ms" class="img-responsive" alt />
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="about-at wow fadeInRight animated animated" data-wow-delay="0.4s">
            <h4>{{companyDesc.title}}</h4>
            <p>{{companyDesc.decs}}</p>
          </div>
        </div>
      </div>

      <div class="team-section">
        <div class="container">
          <h3>我们的技术团队</h3>
          <div class="team-grids">
            <div
              class="col-md-4 team-grid wow fadeInDownBig animated animated"
              data-wow-delay="0.4s"
              v-for="(item,index) of designer"
              :key="index"
            >
              <div class="ih-item circle effect1">
                <a href="#">
                  <div class="spinner"></div>
                  <div class="img">
                    <img :src="URL+item.pic" alt="img" />
                  </div>
                  <div class="info">
                    <div class="info-back">
                      <h4>{{item.uname}}</h4>
                      <span>{{item.title}}</span>
                    </div>
                  </div>
                </a>
              </div>
              <p>{{item.descs}}</p>
              <div class="social-icons">
                <a href="#" v-for="(item,index) of icons" :key="index">
                  <i :class="item"></i>
                </a>
              </div>
            </div>

            <div class="clearfix"></div>
          </div>
        </div>
      </div>

      <div class="furniture">
        <div class="container">
          <div class="furniture-grids">
            <div
              class="col-md-4 furniture-grid wow fadeInRight animated animated"
              data-wow-delay="0.4s"
            >
              <h3>我们的团队</h3>
              <div :class="tabs[i]" v-for="(item,i) of team" :key="i">
                <ul class="place" @click="show(i)">
                  <li>
                    <img :src="require('../assets/images/cir.png')" alt />
                  </li>
                  <li>{{item.title}}:{{item.uname}}</li>
                </ul>
                <p class="hide">{{item.descs}}</p>
              </div>
              
            </div>
            <div
              class="col-md-8 furniture-grid1 wow fadeInLeft animated animated"
              data-wow-delay="0.4s"
            >
              <h3>家具设计</h3>
              <div class="fur-img">
                <img :src="URL+Furniture" class="img-responsive" alt />
              </div>
            </div>
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
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      aboutpic: [],
      company: [],
      designer: [],
      team: [],
      lg: "",
      ms: "",
			icons: ["icon", "icon1", "icon2", "icon3"],
			tabs:['tab1','tab2','tab3','tab4'],
			Furniture:'',
			ischeckShow:false
    };
  },
  computed: {
    ...mapState(["URL", "companyDesc"])
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.axios
        .get("/about")
        .then(res => {
          console.log(res);
					this.aboutpic = res.data.aboutpic;
					// 大图 小图
          this.lg = this.aboutpic[0].pics.lg;
					this.ms = this.aboutpic[0].pics.ms;
					// 将公司的信息保存到vuex里面
          this.company = res.data.company;
					this.setCompany(this.company[0]);
					// 家具设计
					this.Furniture = this.companyDesc.pics.Furniture
          this.designer = res.data.designer;
          this.team = res.data.team;
        })
        .catch(err => {
          console.log(err);
        });
    },
		...mapMutations(["setCompany"]),
		show(i){
			this.ischeckShow = !this.ischeckShow;
			var ul = document.getElementsByClassName('place')[i]
			var p = ul.nextSibling
			p.className=this.ischeckShow?'show':'hide'
		}
  }
};
</script>

<style scope>
.hide{
	display: none;
}
.show{
	display: block;
}
</style>