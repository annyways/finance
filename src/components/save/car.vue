<template lang="html">
  <div :class="$style.content">
    <Panel title="有车有钱" :class="$style.panel">
      <section :class="$style.car">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/16662/30/15341/22141/5caf3007Ed04371f5/92aeb35325e56d32.png?width=375&height=233" alt="">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/21337/31/13706/22340/5ca18608Ebdd6ea02/02d3b385bf9c045c.png?width=375&height=233" alt="">
      </section>
      <section :class="$style.enters">
        <div :class="$style.item" v-for="item in items" :key="item.img">
            <img :src="item.img" alt="">
            <h4>{{item.title}}</h4>
        </div>
      </section>
    </Panel>
    <Panel title="精品活动" :class="$style.panel">
      <section :class="$style.activity">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/35525/40/2975/21587/5cbd5b06E7ebc4232/b4596aec68de09cf.png?width=730&height=264" alt="">
      </section>
    </Panel>
  </div>

</template>

<script>
import Panel from "../layout/panel.vue"

export default {
  data() {
    return {
      items: [
        {title:"机票", img:"https://img12.360buyimg.com/jrpmobile/jfs/t1/14341/37/3393/6583/5c26c570E1c91365c/a12b127c15c524c4.png?width=90&height=90" },
        {title:"租房", img:"https://img12.360buyimg.com/jrpmobile/jfs/t1/5678/12/7013/4702/5ba49a4fE808c96ed/2622695db5d0128b.png?width=88&height=88" },
        {title:"房抵债", img:"https://img12.360buyimg.com/jrpmobile/jfs/t1/4294/38/6852/4745/5ba49a5aEeb72a2f0/b28774eadc4e1527.png?width=90&height=90" },
        {title:"分期用", img:"https://img12.360buyimg.com/jrpmobile/jfs/t1/4554/34/7050/3668/5ba49a60Ed1481e30/413fed46004f96e7.png?width=88&height=88" },
        {title:"彩票推荐", img:"https://img12.360buyimg.com/jrpmobile/jfs/t1/852/23/6959/5247/5ba49a6bE45fd05f7/36437307167c7071.png?width=90&height=90" },
      ]
    }
  },
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>

@import "styles/element.scss";
.content{
  margin-top: 80px;

}
.car{
  img{
    display: inline-block;
    justify-content: space-around;
    width: 49%;
  }
}

.enters{
  @include list(row);
  background: #fff;
  margin-top: 20px;
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
}

.activity{
  img{width: 100%}
}
</style>
