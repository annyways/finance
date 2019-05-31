<template lang="html">
  <div :class="$style.login">
    <div :class="$style.header">
      <div :class="[$style.left,$style.arrowIcon]"></div>
      <div :class="$style.title">京东登录</div>
    </div>
    <div :class="$style.content">
      <div :class="$style.item">
        <input type="text" v-model="username" placeholder="用户名/邮箱/已验证手机"/>
      </div>
      <div :class="$style.item">
        <input type="password" v-model="password" placeholder="请输入密码"/>
      </div>
      <div :class="$style.btns">
        <button name="button" @click="signin" :class="isEnable ? $style.enable : ''">登 录</button>
        <button name="button">一键登录</button>
      </div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import axios from "axios"
import {mapMutations} from "vuex"

import {Toast} from '@nutui/nutui'
Toast.install(Vue)

export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    signin() {
      if(!this.isEnable){
        this.$toast.text('请填入正确的信息',{
          size:"large"
        })
        return
      }
      let param = "?username="+this.username+"&password="+this.password;
      axios.get("/api/signin.js"+param).then( (res)=> {
        if(res.data) {
          this.recordUser({username:this.username})
          this.login("58392e427bf2a0865f2a18781eb3a39ad5f25504")
          this.$router.push("/");
        }
      });

    },

    ...mapMutations(["recordUser","login","headtitle"])
  },
  computed: {
    isEnable() {
      return  (this.username.length>0) && (this.password.length>0)
    }
  },
  mounted() {
    this.headtitle("登录")
  }
}
</script>

<style lang="scss" module>
.login{
  max-width: 750px;
  margin: 0 auto;

}
.header{
  height: 88px;
  line-height: 88px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #e5e5e5;  /*px*/
  background: #fff;
  color: #666;
  font-size: 32px;
  z-index: 100;
  .left{
    float: left;
  }
  .title{
    text-align: center;
  }
}

.content{
    margin-top:120px;
    padding: 0 50px;
  .item{
    border-bottom: 1px solid #e5e5e5; /*px*/
    height: 50px;
    margin: 40px 0;
    padding: 5px 0;
    input{
      border: 0;
      width: 100%;
      height: 100%;
      padding-right: 10px;
      font-size: 28px;
      color: #222;
      box-sizing: border-box;
    }
  }
  .btns{
    button{
      width: 100%;
      border-radius: 40px;
      margin-top: 30px;
      font-size: 28px;
      padding: 20px 0;
      &:nth-child(1){
        background: #ffbcb3;
        color: #fff;
        border: 1px solid #ffbcb3;
      }
      &:nth-child(2){
        background: #fff;
        color: #ff1000;
        border: 1px solid #ff2000;
      }
      &.enable{
        background: #f10000;
      }
    }
  }
}
</style>
