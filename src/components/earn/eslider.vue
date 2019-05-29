<template lang="html">
  <div :class="$style.eslider">
    <nut-swiper
        direction="horizontal"
        :loop="true"
        :canDragging="false"
        :paginationVisible="true"
    >
        <div class="nut-swiper-slide" v-for="item in items">
            <img :src="item.url" alt="">
        </div>
    </nut-swiper>
  </div>

</template>

<script>
import Vue from 'vue'
import {Swiper} from '@nutui/nutui'

Swiper.install(Vue)

export default {
  data() {
    return{
      "items":[
        {"url":"https://img12.360buyimg.com/jrpmobile/jfs/t1/34635/34/11051/40707/5cec92a1E6c1c055e/4b275eb83bd6c1f3.png?width=750&height=400"},
        {"url":"https://img12.360buyimg.com/jrpmobile/jfs/t1/46879/19/504/107897/5cdea0baE7a0eaf0c/d4db650be0adb4d4.png?width=750&height=400"}
      ]
    }
  }
}
</script>

<style lang="scss" module>
.eslider{
  margin-top: 100px;
  .nut-swiper{
    height: 300px !important;
  }
}
</style>
