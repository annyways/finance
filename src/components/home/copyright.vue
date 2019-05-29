<template lang="html">
  <div :class="$style.copyright">
    <p>Copyright © 2004-2018 京东JD.com 版权所有</p>
    <p>投资有风险，购买需谨慎</p>
    <p>京东金融平台服务协议</p>
    <p>京东金融隐私政策</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
.copyright{
  background: #F5F5F5;
  text-align: center;
  color: #999;
  font-size: 20px;
  margin-bottom: 44px;
  p{
    line-height: 60px;
    border-top: 1px solid #e5e5e5;
  }

}
</style>
