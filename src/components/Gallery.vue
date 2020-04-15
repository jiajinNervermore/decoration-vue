<template>
  <div class="gallerys">
    <Header></Header>
    <div class="gallery">
      <h2>画廊</h2>
      <ul class="tabs">
        <li v-for="(item,i) of gal" :key="i" @click="room(i)">{{item}}</li>
      </ul>

      <div class="content">
        <div class="content-item" v-for="(item,i) of all" :key="i">
          <img :src="URL+item.pic" alt @click="details(i)" />
        </div>
      </div>
    </div>
    <!-- <div :class="[{details},{hide:!isLook},{widthAndHeight}]">
      <div class="detail-item">
        <span class="prev" @click="changeDetails(-1)">
          <img :src="require('../assets/images/prev.png')" alt />
        </span>
        <img :src="URL+detailsImg" alt />
        <span class="next" @click="changeDetails(1)">
          <img :src="require('../assets/images/next.png')" alt />
        </span>
        <span class="close"><img :src="require('../assets/images/close.png')" alt=""></span>
      </div>
    </div>-->
    <Footer></Footer>
  </div>
</template>

<script>
import bubble from "../apis/bubble";
import { mapState } from "vuex";
import Header from "./Header";
import Footer from "./Footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      gal: ["全部", "厨房/浴室", "客厅", "卧室"],
      kitchenBath: [],
      livingroom: [],
      bedroom: [],
      all: [],
      detailsImg: "",
      isLook: false,
      screenWidth: window.innerWidth, // 屏幕宽
      screeHeight: window.innerHeight
    };
  },
  created() {
    this.loadMore();
  },
  computed: {
    ...mapState(["URL"]),
    widthAndHeight() {
      return {
        width: this.screenWidth,
        height: this.screeHeight
      };
    }
  },
  methods: {
    changeDetails(n) {
      console.log(n);
    },
    room(n) {
      if (n > 0) {
        let obj = {
          galId: n
        };
        this.axios
          .post("/room", obj)
          .then(res => {
            this.all = res.data.slice(0, 9);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.loadMore();
      }
    },
    loadMore() {
      this.axios
        .get("/gallery")
        .then(res => {
          // console.log(res);
          this.kitchenBath = res.data.kitchenBath;
          this.livingroom = res.data.livingroom;
          this.bedroom = res.data.bedroom;
          this.all = [...this.kitchenBath, ...this.livingroom, ...this.bedroom];
          this.all = bubble(this.all).slice(0, 9);
          console.log(this.all);
        })
        .catch(err => {
          console.log(err);
        });
    },
    details(n) {
      this.isLook = true;
      this.detailsImg = this.all[n].pic;
    }
  }
};
</script>

<style scope>
.gallery {
  margin: 0 auto;
  text-align: center;
  padding: 3rem;
}
.gallery h2 {
  margin-bottom: 1rem;
}
.tabs {
  box-sizing: border-box;
  display: flex;
  width: 40%;
  list-style: none;
  justify-content: space-between;
  height: 2rem;
  align-items: center;
}
.tabs > li {
  background: #009b97;
  padding: 0.5rem 1.5rem;
  color: #fff;
}
.tabs > li:hover {
  background: #000;
  transition: all linear 0.5s;
  cursor: pointer;
}
.content {
  box-sizing: border-box;
  display: flex;
  padding: 0.8rem 0;
  width: 100%;
  justify-content: start;
  flex-wrap: wrap;
}
.content-item {
  padding: 1rem 1rem;
  width: 33.3%;
}
.content-item img {
  width: 100%;
  border-radius: 5px;
}
.content-item:hover {
  border-radius: 5px;
  box-shadow: 0 0 0.25rem 0.25rem #dcdcdc inset;
}
.details {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
}
.hide {
  display: none;
}
.show {
  display: block;
}
.detail-item {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  margin-top: 50%;
  position: relative;
}
.prev {
  position: absolute;
  top: 130px;
  left: 5px;
}
.next {
  position: absolute;
  top: 130px;
  right: 10px;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
}
</style>