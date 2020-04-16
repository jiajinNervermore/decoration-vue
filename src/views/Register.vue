<template>
  <div class="Register">
    <h3 style="marginBottom:1rem;marginTop:1rem;">用户注册</h3>
    <div class="content">
      <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-form-item label="用户名">
          <el-input
            v-model="form.uname"
            clearable
            maxlength="16"
            show-word-limit
            @blur="unameCheck"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.upwd" clearable show-password maxlength="16" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="再次输入">
          <el-input v-model="form.upwd2" clearable show-password maxlength="16" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" clearable></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone" clearable></el-input>
        </el-form-item>
        <div class="captcha">
          <el-image style="width: 200px; height: 50px" :src="captchaURL"></el-image>
          <el-image
            style="width: 32px; height: 32px"
            :src="require('../assets/images/f14.png')"
            @click="refreshCaptcha"
          ></el-image>
        </div>
        <el-form-item label="验证码">
          <el-input v-model="form.captcha" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      <div class="prompt">
        <p :class="form.uname?'show':'hide'">
          <img :src="require(`../assets/images/${uname?'cuowuicon.png':'queren.png'}`)" alt />
          <span :class="uname?'show':'hide'">格式错误</span>
          <span :class="isUserRegister?'show':'hide'">该用户名已经被注册</span>
        </p>
        <p :class="form.upwd?'show':'hide'">
          <img :src="require(`../assets/images/${upwd?'cuowuicon.png':'queren.png'}`)" alt />
          <span>{{chUpwd}}</span>
        </p>
        <p :class="form.upwd2?'show':'hide'">
          <img
            :src="require(`../assets/images/${form.upwd2!=form.upwd?'cuowuicon.png':'queren.png'}`)"
            alt
          />
          <span v-if="form.upwd2!=form.upwd">两次输入密码不一样</span>
        </p>
        <p :class="form.email?'show':'hide'">
          <img :src="require(`../assets/images/${checkEmail?'cuowuicon.png':'queren.png'}`)" alt />
          <span :class="checkEmail?'show':'hide'">邮箱格式错误</span>
        </p>
        <p :class="form.phone?'show':'hide'">
          <img :src="require(`../assets/images/${checkPhone?'cuowuicon.png':'queren.png'}`)" alt />
          <span :class="checkPhone?'show':'hide'">手机格式错误</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      form: {
        uname: "",
        upwd: "",
        upwd2: "",
        email: "",
        phone: "",
        captcha: ""
      },
      isUserRegister: false,
      isEmailregister: false,
      isPhoneregister: false,
      randNum: Math.random()
    };
  },
  computed: {
    captchaURL() {
      return (
        this.axios.defaults.baseURL + "/user/register/captcha?" + this.randNum
      );
    },
    uname() {
      var reg = /^[a-zA-Z0-9_-]{8,16}$/;
      var uname = this.form.uname.trim();
      return reg.test(uname) ? false : true;
    },
    chUpwd() {
      var upwd = this.form.upwd.trim();
      var regupper = /[A-Z]/;
      var reglower = /[a-z]/;
      var pPattern = /^[A-Za-z0-9]{6,}$/;

      if (upwd.search(regupper) == -1) {
        return "至少包括1个大写字母";
      } else if (upwd.search(regupper) != -1 && upwd.search(reglower) == -1) {
        return "至少包括1个小写字母";
      } else if (upwd.search(/[0-9]/) == -1) {
        return "至少包括1个数字";
      } else if (!pPattern.test(upwd)) {
        return "最少6位";
      } else {
        return "";
      }
    },
    upwd() {
      var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
      var upwd = this.form.upwd.trim();
      return pPattern.test(upwd) ? false : true;
    },
    // 检测邮箱格式
    checkEmail() {
      var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var email = this.form.email;
      return regEmail.test(email) ? false : true;
    },
    // 检测电话号码格式
    checkPhone() {
      var regPhone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
      var phone = this.form.phone;
      return regPhone.test(phone) ? false : true;
    }
  },
  methods: {
    // 检测账号是否已经注册和格式是否正确
    unameCheck() {
      var reg = /^[a-zA-Z0-9_-]{8,16}$/;
      var uname = this.form.uname.trim();
      reg.test(uname) ? (this.checkUname = false) : (this.checkUname = true);
      uname ? (this.unameIcon = true) : (this.unameIcon = false);
      let obj = {
        uname: uname
      };
      console.log(this.isUserRegister);
      this.axios
        .get("/user/check_uname", { params: obj })
        .then(res => {
          if (res.data.code == 401) {
            this.isUserRegister = false;
          } else {
            this.isUserRegister = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    refreshCaptcha() {
      //this.captchaURL = this.$http.defaults.baseURL + '/user/register/captcha'
      //错误①：计算属性不能修改		错误②：验证码图片的地址与之前的值一样，浏览器不会重新刷新图片
      /*提示：浏览器认为下面的两个地址是不同的：
				  http://127.0.0.1:9090/user/register/captcha?0.123
				  http://127.0.0.1:9090/user/register/captcha?0.456  
				*/
      this.randNum = Math.random(); //修改随机小数为一个新值
    },
    onSubmit() {
      let obj = {
        uname: this.form.uname,
        upwd: this.form.upwd,
        email: this.form.email,
        phone: this.form.phone,
        captcha: this.form.captcha
      };
      console.log(!this.uname, !this.checkPhone, !this.upwd, !this.checkEmail);
      if (!this.uname && !this.upwd && !this.checkEmail && !this.checkPhone) {
        this.axios
          .post("/user/register", obj)
          .then(res => {
            console.log(res);
            if (res.data.code == 200) {
              this.$confirm("是否跳转到登录页面?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
              })
                .then(() => {
                  this.$router.push('/login')
                })
                .catch(() => {
                  this.$message({
                    type: "info",
                    message: "已取消操作"
                  });
                });
            }else{
              this.$message('注册失败,用户名已被注册过')
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$message("格式不正确");
      }
    }
  },
  watch: {}
};
</script>

<style scope>
.Register {
  margin: 0 auto;
  text-align: center;
}
.Register .content {
  width: 600px;
  margin: 0 auto;
  border: 1px solid #f8f8ff;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
}
.captcha {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
/**提示栏 */
.prompt {
  width: 200px;
}
.Register .form {
  width: 400px;
}
.prompt p {
  height: 45px;
  line-height: 45px;
  margin-bottom: 22px;
  display: flex !important;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.prompt p img {
  margin: 0 1rem;
  width: 16px;
  height: 16px;
}
.prompt p span {
  font-size: 1rem;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>