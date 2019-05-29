<template lang="html">
  <section :class="$style.enters">
    <div :class="$style.item" v-for="item in items" :key="item.img">
        <img :src="item.img" alt="">
        <h4>{{item.title}}</h4>
    </div>
    <div class="$style.ad">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/63259/11/578/59388/5cec92e4E953e94da/8bd2e0a7bce47f38.jpg?width=750&height=200" alt="">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/54430/7/1152/31787/5cee32fdE48ba90c6/de76eb0cda423436.jpg?width=750&height=200" alt="">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {title:"有钱赚", img:"https://img12.360buyimg.com/jrpmobile/jfs/t1/71967/29/100/8974/5ce24a67E99e3598e/01aad70029ce55b2.png?width=90&height=90" },
        {title:"双签", img:"https://img12.360buyimg.com/jrpmobile/jfs/t1/22708/8/15082/7446/5cad5c35E7e3ae22b/72adc577175d7c4f.png?width=90&height=90" },
        {title:"优惠券", img:"https://img12.360buyimg.com/jrpmobile/jfs/t27796/46/1836066448/4169/de69ccb0/5bee6bc3N92ca0e60.png?width=90&height=90" },
        {title:"单单返京豆", img:"https://img12.360buyimg.com/jrpmobile/jfs/t27850/30/1789047580/4856/13f8bcb9/5bee6bcbN996fb433.png?width=90&height=90" },
        {title:"全部", img:"https://img12.360buyimg.com/jrpmobile/jfs/t29131/288/288291507/3943/bed46aef/5bee6bd5Nfc5d5360.png?width=90&height=90" },
      ]
    }
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
    width: 20%;
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

  .ad{
    img{width: 100%;margin-top: 20px;}
  }
}
</style>
