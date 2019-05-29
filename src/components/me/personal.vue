<template lang="html">
  <section :class="$style.personal">
    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="">
    <p>{{this.user.username}}</p>
    <i>
      <router-link :to="{ name: '', params: {} }">
        会员福利
      </router-link>
    </i>
  </section>
</template>

<script>
import {mapState} from "vuex"

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      user: "usermsg"
    })
  },
  methods: {

  }
}
</script>

<style lang="scss" module>
.personal{
  margin-top: 90px;
  height: 150px;
  line-height: 150px;
  background: #fff;

  padding: 0 40px;
  vertical-align: middle;
  border-bottom: 1px solid #e5e5e5;  /*px*/
  img{
    width:80px;
    height: 80px;
    float: left;
    margin: 35px 10px 0 0;
  }
  p{
    font-size: 28px;
    display: inline-block;
  }
  i{
    float: right;
    font-size: 24px;
    a{
      text-decoration: none;
      color: #999;
    }
  }
}
</style>
