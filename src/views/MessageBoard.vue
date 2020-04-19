<template>
  <div class="messageBoard">
    <el-container>
      <el-header class="headers">
        <span>
          <img :src="require('../assets/images/xia.png')" alt @click="back" />
        </span>

        <span>留言墙</span>
        <router-link to="/login" :disabled="userInfo.uid">{{isLogin}}</router-link>
      </el-header>
    </el-container>
    <div class="contents">
      <div class="messages">
        <div class="messageInfo" v-for="(item, index) in messageList" :key="index">
          <div class="user">
            <img :src="userImg(item)" alt class="userIcon" />
            <span>{{item.uname}}</span>
            <span>{{item.fTime | toTime}}</span>
          </div>
          <span class="floor">{{item.mid}}楼</span>
          <div class="message">
            <h3>{{item.mes}}</h3>
          </div>
        </div>
      </div>
      <div class="block">
        <span class="demonstration">直接前往</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>
      </div>
      <el-form class="sendTarea">
        <el-form-item label="请输入留言...">
          <el-input type="textarea" :rows="3" v-model="form.message" maxlength="30" show-word-limit></el-input>
        </el-form-item>
        <el-form-item style="text-align:center;">
          <el-button type="primary" @click="send">立即发送</el-button>
        </el-form-item>
      </el-form>
      <el-card class="advertising">
        <div slot="header" class="clearfix">
          <img :src="require('../assets/images/guanzhu.png')" alt />
          <span>关注我</span>
        </div>
        <div class="adver">
          <div v-for="(item,index) of icons" :key="index" class="text item">
            <ul class="single-item">
              <li class="adver-item">
                <span class="adver-icon">
                  <img :src="require('../assets/images/'+item.img)" alt />
                </span>
                <span>{{item.name}}</span>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import bubbleup from "../apis/bubbleup";
// import Footer from "../components/Footer";
export default {
  data() {
    return {
      messageList: [],
      mesUser: [],
      currentPage3: 5,
      start: 1,
      icons:[{name:'新浪微博',img:'weibo.png'},{name:'GitHub',img:'github.png'},{name:'微信公众号',img:'weixin.png'}],
      form: {
        message: ""
      }
    };
  },
  // components: {
  //   Footer
  // },
  computed: {
    ...mapState(["userInfo"]),
    isLogin() {
      return this.userInfo.uid ? this.userInfo.uname : "去登陆";
    }
  },
  filters: {
    toTime(oldtime) {
      let newTime = parseInt(oldtime);
      let date = new Date(newTime);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      return (
        year + "-" + month + "-" + day + " / " + hour + ":" + min + ":" + sec
      );
    }
  },
  created() {
    this.loadMore(this.start);
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.start = val;
      console.log(this.start);
      this.loadMore(val);
    },
    userImg(item) {
      if (!item.avatar) {
        return require("../assets/images/yonghu.png");
      } else {
        return this.axios.defaults.baseURL + item.avatar;
      }
    },
    // 返回上一个页面
    back() {
      this.$router.go(-1);
    },
    // 发表评论、留言
    send() {
      let uid = this.userInfo.uid;
      if (!uid) {
        this.$message("请登录...");
      } else {
        let obj = {
          fromuid: uid,
          uname: this.userInfo.uname,
          avatar: this.userInfo.avatar,
          touid: "",
          mes: this.form.message,
          files: ""
        };
        this.axios
          .post("/addMessage", obj)
          .then(res => {
            if (res.data.code == 200) {
              this.$message("留言成功");
              this.form.message = "";
              this.loadMore(this.start);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    loadMore(start) {
      if (!start) {
        start = 1;
      }
      let obj = {
        start: start
      };

      this.axios
        .get("/messagelist", { params: obj })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.messageList = res.data.results.messageList;
            this.mesUser = res.data.results.mesUser;
          } else {
            this.messageList = [];
            this.$message("没人留言");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scope>
.contents {
  padding: 1rem;
}
/**广告宣传 */
.advertising {
  position: fixed;
  right: 3rem;
  top: 10rem;
  width: 40rem;
}
.advertising .clearfix img {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
}
.adver {
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
}
.single-item {
  list-style: none;
}
.adver-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8rem;
  height: 10rem;
  padding: 0.5rem 0;
  justify-content: space-between;
}
.adver-icon {
  display: flex;
  width: 4rem;
  height:4rem;
  text-align:center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #F0FFFF;
}
.adver-icon:hover{
  cursor: pointer;
}
.adver-icon img{
  width:2rem;
  height:2rem;
  transition: all 1s linear;
}
.adver-icon img:hover{
  width:3rem;
  height:3rem;

  transform: rotate(360deg);
  transition: all 1s linear;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.headers {
  display: flex;
  justify-content: space-between;
  height: 100px;
}
.user {
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
}
/**楼层 */
.floor {
  float: right;
  margin-top: -3rem;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.sendTarea {
  width: 500px;
}
.messages {
  width: 50%;
}
.messageInfo {
  border: 1px solid greenyellow;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
}
/**头像 */
.userIcon {
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
}
</style>