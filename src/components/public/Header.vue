<template>
  <div :class="$style.header">
    <div :class="[$style.left,$style.arrowIcon]" @click="goback">
      <span>&#xe624;</span>
    </div>
    <div :class="$style.title">{{headtitle}}</div>
    <div :class="[$style.right,$style.moreIcon]"></div>
  </div>
</template>

<script>
import Vue from "vue"
import {mapState} from "vuex"

/*Vue.prototype.$setGoIndex = function() {
  if(window.history.length <= 1) {
    if(location.href.indexOf("?") === -1) {
      window.location.href = location.href + "?goIndex=true"
    }else if(location.href.indexOf("?") !== -1 && location.href.indexOf("goIndex") === -1) {
      window.location.href = location.href + "&goIndex=true"
    }
  }
}*/

export default {
  computed: {
    ...mapState({
      headtitle: "headtitle"
    })
  },
  methods: {
    goback() {
      const r = this.$router
      //r.query.goIndex ? r.push("/") : r.back(-1)
      r.back(-1)
    }
  }
}
</script>

<style lang="scss" module>
@font-face {
  font-family: 'iconfont';  /* project id 1002516 */
  src: url('//at.alicdn.com/t/font_1002516_27rjvy6ca1x.eot');
  src: url('//at.alicdn.com/t/font_1002516_27rjvy6ca1x.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1002516_27rjvy6ca1x.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1002516_27rjvy6ca1x.woff') format('woff'),
  url('//at.alicdn.com/t/font_1002516_27rjvy6ca1x.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1002516_27rjvy6ca1x.svg#iconfont') format('svg');
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
  .arrowIcon{
    float: left;
    span{
      margin: 12px 0 0 10px;
      width: 40px;
      height:40px;
      font-family: 'iconfont'
    }
  }
  .right{
    float: right;
  }
  .title{
    text-align: center;
  }
}
</style>
