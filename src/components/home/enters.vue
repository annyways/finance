<template lang="html">
  <section :class="$style.enters">
    <div :class="$style.item" v-for="item in items" :key="item.img">
      <router-link :to="{ name: item.href }">
        <img :src="item.img" alt="">
        <h4>{{item.title}}</h4>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style lang="scss" module>
@import "styles/element.scss";

.enters{
  @include list(row);
  background: #fff;
  margin-top: 120px;
  padding: 20px 0;
  justify-content: space-around;
  a{text-decoration: none;}

  .item{
    text-align: center;
    width: 25%;
    min-height: 180px;
    img{
      width: 90px;
      height: 90px;
      display: inline-block;
    }
    h4{
      font-size: 24px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>
