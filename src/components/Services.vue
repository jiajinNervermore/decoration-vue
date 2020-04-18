<template>
  <div class="content">
    <Header></Header>
    <div class="serve">
    <div class="service-section">
      <div class="container">
        <h2>服务</h2>
        <div class="service-grids">
          <div class="col-md-6 serce-grid wow fadeInLeft animated animated" data-wow-delay="0.4s">
            <div class="service-img">
              <img :src="services && URL+services[0]" class="img-responsive wid" alt />
            </div>
          </div>
          <div class="col-md-6 serce-grid wow fadeInRight animated animated" data-wow-delay="0.4s">
            <div class="service-top">
              <div class="col-md-6 service-left">
                <div class="service-img">
                  <img :src="works && URL+works[0].img" class="img-responsive wid" alt />
                </div>
                <h5>{{works[0].title}}</h5>
                <p>{{works[0].services}}</p>
              </div>
              <div class="col-md-6 service-right">
                <div class="service-img">
                  <img :src="works && URL+works[1].img" class="img-responsive wid" alt />
                </div>
                <h5>{{works[1].title}}</h5>
                <p>{{works[1].services}}</p>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="service-top1">
              <div class="col-md-6 service-left">
                <div class="service-img">
                  <img :src="works && URL+works[2].img" class="img-responsive wid" alt />
                </div>
                <h5>{{works[2].title}}</h5>
                <p>{{works[2].services}}</p>
              </div>
              <div class="col-md-6 service-right">
                <div class="service-img">
                  <img :src="works && URL+works[3].img" class="img-responsive wid" alt />
                </div>
                <h5>{{works[3].title}}</h5>
                <p>{{works[3].services}}</p>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="service-grids">
          <div class="col-md-6 serce-grid wow fadeInLeft animated animated" data-wow-delay="0.4s">
            <div class="service-top">
              <div class="col-md-6 service-left">
                <div class="service-img">
                  <img :src="works && URL+works[4].img" class="img-responsive wid" alt />
                </div>
                <h5>{{works[4].title}}</h5>
                <p>{{works[4].services}}</p>
              </div>
              <div class="col-md-6 service-right">
                <div class="service-img">
                  <img :src="works && URL+works[5].img" class="img-responsive wid" alt />
                </div>
                <h5>{{works[5].title}}</h5>
                <p>{{works[5].services}}</p>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="service-top1">
              <div class="col-md-6 service-left">
                <div class="service-img">
                  <img :src="works && URL+works[6].img" class="img-responsive wid" alt />
                </div>
                <h5>{{works[6].title}}</h5>
                <p>{{works[6].services}}</p>
              </div>
              <div class="col-md-6 service-right">
                <div class="service-img">
                  <img :src="works && URL+works[7].img" class="img-responsive wid" alt />
                </div>
                <h5>{{works[7].title}}</h5>
                <p>{{works[7].services}}</p>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="col-md-6 serce-grid wow fadeInRight animated animated" data-wow-delay="0.4s">
            <div class="service-img">
              <img :src="services && URL+services[1]"  class="img-responsive wid" alt />
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div class="choose-section">
      <div class="container">
        <h3>为什么选择我们</h3>
        <div class="choose-grids">
          <div class="col-md-3 choose-gd wow fadeInLeft animated animated" data-wow-delay="0.4s" v-for="(item,i) of company" :key="i">
            <div class="icon hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a">
              <a href="#" class="hi-icon hi-icon-mobile glyphicon glyphicon-user"></a>
            </div>
            <h4>{{item.title}}</h4>
            <p class="decs">{{item.decs}}</p>
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
      works: [],
      company: [],
      services: [],
			top: ["top", "top1"],
			fadeIn:['fadeInLeft','fadeInRight'],
			ser:['service-left','service-right']
    };
  },
  computed: {
    ...mapState(["URL"])
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.axios
        .get("/services")
        .then(res => {
          
          this.services = res.data.aboutpic[0].services;
          this.works = res.data.aboutpic[0].works;
          this.company = res.data.company;
          
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scope>
.decs{
  overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}

</style>