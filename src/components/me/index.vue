<template lang="html">
  <div :class="$style.me">
    <heador/>
    <personal/>
    <channels></channels>
    <navBar/>
  </div>
</template>

<script>
import Heador from "public/Header.vue";
import NavBar from "public/navBar.vue";

import Personal from "./personal.vue"
import Channels from "./channels.vue"

export default {
  components: {
    Heador,
    Channels,
    Personal,
    NavBar
  }
}
</script>

<style lang="scss" module>
.me{
  background: #f5f5f5;
}
</style>
