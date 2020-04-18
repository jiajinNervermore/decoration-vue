<template>
  <div class="messageBoard">
    <el-container>
      
      <el-header class="headers">
      <span>
        <img :src="require('../assets/images/xia.png')" alt @click="back"/>
      </span>
      
      <span>留言墙</span>
      <router-link to="/login" :disabled="userInfo.uid">{{isLogin}}</router-link>
      </el-header>
    </el-container>

    <div class="messages">
      <div class="messageInfo" v-for="(item, index) in messageList" :key="index">
        <div class="user">
          <img :src="userImg(item)" alt class="userIcon"/>
          <span>{{item.uname}}</span>
          <span>{{item.fTime | toTime}}</span>
        </div>
        <div class="message">
          <h3>{{item.mes}}</h3>
        </div>
      </div>
    </div>
    <el-form class="sendTarea">
      <el-form-item label="请输入留言...">
        <el-input type="textarea" :rows="3" v-model="form.message" maxlength="30" show-word-limit></el-input>
      </el-form-item>
      <el-form-item style="text-align:center;">
        <el-button type="primary" @click="send">立即发送</el-button>
      </el-form-item>
    </el-form>
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
    isLogin(){
      return this.userInfo.uid ? this.userInfo.uname : '去登陆' 
    },
    
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
    this.loadMore();
  },
  methods: {
    userImg(item) {
      if (!item.avatar) {
        return require("../assets/images/yonghu.png");
      } else {
        return this.axios.defaults.baseURL + item.avatar
      }
    },
    // 返回上一个页面
    back(){
      this.$router.go(-1)
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
            if(res.data.code == 200){
              this.$message('留言成功')
              this.form.message = ''
              this.loadMore()
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    loadMore() {
      this.axios
        .get("/messagelist")
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.messageList = res.data.results.messageList;
            this.mesUser = res.data.results.mesUser;
          } else {
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
.headers{
  display: flex;
  justify-content: space-between;
  height:100px;
}
.user {
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
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
  height: 30rem;
  overflow: auto;
}
.messageInfo{
  border: 1px solid greenyellow;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
}
/**头像 */
.userIcon{
  width:3rem;height:3rem;
  border-radius: 1.5rem;
}
</style>