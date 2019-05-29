<template lang="html">
  <div :class="$style.navBar">
    <ul :class="$style.content">
      <li :class="$style.item" v-for="item in items" :key="item.title">
        <router-link :to="item.url">
          <img :src="item.img" alt=""/>
          <h4>{{item.title}}</h4>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:[
        {
          title:"首页",
          url:'/home',
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90"
        },
        {
          title:"赚钱",
          url:'/earn',
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60"
        },
        {
          title:"借钱",
          url:'/save',
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/9698/36/4230/594/5bda5919Ec55e200a/dd949177311f04e7.png?width=60&height=60"
        },
        {
          title:"我的",
          url:'/me',
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/5465/19/13992/926/5bda5932Ed6569f64/e58f749c755abad7.png?width=60&height=60"
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import "styles/element.scss";
.navBar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  margin: 0;
  background: #fff;
  box-shadow: 0 -3px 4px rgba(0,0,0,.03);
  .content{
    @include flex(row);
    justify-content: space-around;
    li{
      text-align: center;
      a{
        text-decoration: none;
      }
      img{
        width: 44px;
        height: 44px;
        display: inline-block;
        margin: 12px auto 6px;
      }
      h4{
        font-size: 22px;
        color: #656565;
      }
    }
  }
}
</style>
