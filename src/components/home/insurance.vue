<template lang="html">
  <Panel title="保险保障" :class="$style.panel">
    <section>
      <nut-scroller @jump="jump()">
        <div slot="list" class="nut-hor-list-item" :class="$style.item" v-for="(item, index) of items" :key="index">
            <div class="nut-scroller-item-info">
              <img :src="item.url" alt="" :class="$style.itemImg">
            </div>
        </div>
      </nut-scroller>
    </section>
  </Panel>
</template>

<script>
import Vue from 'vue'
import Scroller from '@nutui/nutui/dist/packages/scroller/scroller.js';  // 加载构建后的JS
import '@nutui/nutui/dist/packages/scroller/scroller.css';  //加载构建后的CSS

import Panel from "../layout/panel.vue"

export default {
  components: {
    Panel
  },
  props: {
    items: Array
  }
}
</script>

<style lang="scss" module>
  @import "styles/element.scss";

  .panel{
    @include panel;
    .item{
      width:220px !important;
      height: auto;
      margin-right: 24px;
      .itemImg{
        width: 100%;
        height: 100%;
      }
    }
    .item:nth-child(1){
      margin-left: 40px;
    }
  }

</style>
