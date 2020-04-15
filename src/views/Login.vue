<template>
  <div class="Register">
    <div class="content">
      <h3 style="marginBottom:1rem">用户登录</h3>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.uname" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.upwd" clearable></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="form.upwd" clearable size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
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
        upwd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scope>
.Register {
  margin: 0 auto;
  text-align: center;
}
.Register .content {
  width: 500px;
  margin: 0 auto;
  border: 1px solid #f8f8ff;
  padding: 2rem;
}
</style>