<template>
  <div class="avatar">
    <el-container class="headers">
      <el-header>上传并修改我的头像</el-header>
    </el-container>
    <el-image style="width: 100px; height: 100px" :src="avatarIcon" :fit="fit"></el-image>请选择您要上传的头像文件：
    <!-- 文件上传输入框不允许使用v-model做双向数据绑定 -->
    <!-- <input type="file" v-model="avatarFile"> -->

    <div>
      <input type="file" @change="doFileChange($event)" />
      
      <el-button @click="doFileUpload()" class="sendFile">执行文件上传</el-button>
      <el-button @click="back()" class="back">返回</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      fit: "fill",
      avatarFile: null,
      icon: ""
    };
  },
  methods: {
    ...mapMutations(["setUserInfo"]),
    back() {
      this.$router.go(-1);
    },

    doFileChange(e) {
      //console.dir(e.target)  //输出事件源对象——<input type="file">
      this.avatarFile = e.target.files[0]; //从FileList中取出第0个File
      //把客户端选中的文件列表中的第0个保存为data属性
    },
    updateAvatar(url) {
      let that = this
      let obj = {
        uid: this.userInfo.uid,
        avatar: url
      };
      that.axios.post("/user/update/avatar", obj).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          that.axios.post("/user/query", obj).then(res => {
            console.log(res)
            if (res.data.code == 200) {
              that.$store.commit('setUserInfo',res.data.data)
              that.$message("修改成功");
            } else {
              that.$message("修改失败");
            }
          });
        } else {
          that.$message("修改失败");
        }
      });
    },
    doFileUpload() {
      //执行异步文件上传——把用户选中的图片文件上传给后端服务器
      let data = new FormData(); //表单数据
      data.append("desc", "这是我的头像文件"); //将要提交给服务器的字符数据
      data.append("avatar", this.avatarFile); //将要提交给服务器的文件数据

      let config = {
        //包含文件上传字段的HTTP请求消息，内容类型必需是:
        headers: { "Content-Type": "multipart/form-data" }
      };

      this.axios
        .post("/user/upload/avatar", data, config)
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            let url = "";
            url = res.data.fileName;
            url = url.split("./public")[1];
            this.updateAvatar(url);
          } else {
            this.$message("上传失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapState(["userInfo"]),
    avatarIcon() {
      if (this.userInfo.avatar) {
        return this.axios.defaults.baseURL + this.userInfo.avatar
      } else {
        return require("../assets/images/yonghu.png");
      }
    }
  }
};
</script>

<style scoped>
.headers{
  width:100%;
}
.avatar {
  margin: 0 auto;
  width: 50rem;
  height: 30rem;
  border: 1px solid #f5f5f5;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sendFile {
  width: 40%;
  margin-top: 1rem;
  text-align: center;
  padding-right: 100px;
}
</style>