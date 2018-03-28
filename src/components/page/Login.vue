<template>
  <div class="loginBox">
    <p class="title">用户登录</p>
    <form id="loginform" method="post">
      <ul class="login-main">
        <li><input id="j_username" name="j_username" class="name-input" type="text" placeholder="账号" v-model="param.loginName"></li>
        <li><input id="j_password" name="j_password" class="psd-input" type="password" placeholder="密码" v-model="password"></li>
        <li>
          <input id="validCode" name="validCode" v-model="param.valicode" maxlength="4" class="captcha-input" autocomplete="off" type="text" placeholder="验证码">
          <img :src="src" id="validateImage" @click="changeValidateImage()">
        </li>
      </ul>
    </form>
    <button class="login-btn" @click="login()">登录</button>
  </div>
</template>
<script>
  import Md5 from '../../assets/js/md5'
  export default{
    data(){
      return{
        src:"http://114.55.63.68/servlet/ImageValidate?t=new Date().getTime()",
        imgCode:'',
        password: '',
        param : {
          "loginName": "",
          "password": "",
          "valicode": ""
        }
      }
    },
    created(){
      this.changeValidateImage();
      window.onkeydown = (event) =>{
        if(event.keyCode === 13){
          this.login();
        }
      }    
    },
    methods:{
      changeValidateImage(){
       this.src = 'http://114.55.63.68/servlet/ImageValidate?t=' + new Date().getTime();
      },
      login(){
        this.param.password = Md5.md5(this.password);
        this.ajaxSubmit("/backstage/user/validLogin", this.param, (data, zepXHR) => {
          console.log(1112)
        })
      }
    }
  }
</script>
<style>
  .loginBox{
    width: 430px;
    height: 400px;
    padding: 0 60px;
    background: white;
    position: fixed;
    top:0;
    left: 0;
    right:0;
    bottom: 0;
    margin: auto;
    z-index: 9999;
}
.loginBox .title{
    height: 100px;
    width: 310px;
    line-height: 125px;
    font-size: 22px;
    text-align: center;
}
.name-input,.psd-input,.captcha-input{
    width: 308px;
    height: 38px;
    border: 1px solid #DDDDDD;
    margin-bottom: 15px;
    padding-left: 8px;
}
.login-main li:last-of-type{
    position: relative;
}
.login-main img{
    width: 60px;
    height: 22px;
    display: inline-block;
    position: absolute;
    top:8px;
    right: 124px;
}
.login-btn{
    width: 310px;
    height: 38px;
    background: #36A9EC;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
}
</style>