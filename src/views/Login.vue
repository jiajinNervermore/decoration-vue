<template>
  <div class="login">
    <div class="content">
      <h3 style="marginBottom:1rem">用户登录</h3>
      <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-form-item label="用户名">
          <el-input
            v-model="form.uname"
            clearable
            maxlength="16"
            show-word-limit
            aria-placeholder="请输入用户名..."
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.upwd"
            clearable
            show-password
            maxlength="16"
            show-word-limit
            aria-placeholder="请输入密码..."
          ></el-input>
        </el-form-item>
        <p>
          <router-link to="update" class="upwdup">忘记密码?</router-link>
        </p>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      input: "",
      form: {
        uname: "",
        upwd: ""
      }
    };
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    onSubmit() {
      let obj = {
        uname: this.form.uname,
        upwd: this.form.upwd
      };
      
      this.axios
        .post("/user/login", obj)
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.$store.commit('setUserInfo',res.data.userInfo)
            this.$router.push("/");
          } else {
            this.$message("登录失败,用户名或密码错误");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.login {
  margin: 0 auto;
  text-align: center;
}
.login .content {
  width: 500px;
  margin: 0 auto;
  border: 1px solid #f8f8ff;
  padding: 2rem;
  text-align: center;
}
.form {
  width: 300px;
  margin: 0 auto;
}
.upwdup{
  float: right;
 margin-top:-20px;
}
</style>