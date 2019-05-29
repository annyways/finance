<template lang="html">
  <div :class="$style.save">
    <Heador/>
    <Car/>
    <NavBar/>
  </div>
</template>

<script>
import Heador from "public/Header.vue";
import NavBar from "public/navBar.vue";

import Car from "./car.vue"

export default {
  components: {
    Heador,
    NavBar,
    Car
  }
}
</script>

<style lang="scss" module>
.save{
  background: #f5f5f5;
}
</style>
