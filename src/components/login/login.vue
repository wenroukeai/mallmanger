<template>
  <div class="login-wrap">
    <el-form
    class="login-form"
    :label-position="labelPosition"
    label-width="80px"
    :model="formData"
    >
    <h2>用户登录</h2>
      <el-form-item label="账号">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button round  @click.prevent="handleLogin()">登录</el-button>
    </el-form>
    
  </div>
</template>

<script>
export default {
    data() {
      return {
        labelPosition: 'top',
        formData: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      handleLogin(){
        this.$http.post('login',this.formData)
        .then(res=>{
          
          const {
            data,
            meta:{msg,status} 
          }=res.data
          //1.登陆成功
          if(status===200){
            //跳转页面
            this.$router.push({name:'home'})
            //提示消息
            this.$message.success(msg);
          }
          //2.登陆不成功
          else{
            this.$message.error(msg)
          }
        })
      }
    },
};
</script>

<style >
    .login-wrap{
        height: 100%;
        background-color: #324152;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-wrap .login-form{
        width: 400px;
        background-color: #fff;
        border-radius: 5px;
        padding: 30px;
    }
</style>
