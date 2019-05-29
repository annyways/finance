<template>
  <div :class="$style.header">
    <div :class="[$style.left,$style.arrowIcon]"></div>
    <div :class="$style.title">京东金融</div>
    <div :class="[$style.right,$style.moreIcon]"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" module>
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
  .right{
    float: right;
  }
  .title{
    text-align: center;
  }
}
</style>
