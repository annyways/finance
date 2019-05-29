<template lang="html">
  <div :class="$style.earn">
    <Heador/>
    <eslider/>
    <Mission :items="missionData"/>
    <NavBar/>
  </div>

</template>

<script>
import axios from "axios"

import Heador from "public/Header.vue";
import NavBar from "public/navBar.vue";

import Eslider from './eslider.vue'
import Mission from "../home/mission.vue";


export default {
  data() {
    return {
      missionData: []
    }
  },
  components: {
    Heador,
    Eslider,
    Mission,
    NavBar
  },
  methods: {
    getInfo(data, callback) {
      axios.get('/mockapi/home.json').then( (res) => {
        let homeData = JSON.parse(JSON.stringify(res.data));
        this.missionData = homeData.mission;
      });
    }
  },
  mounted() {
    this.getInfo();
  }
}
</script>

<style lang="scss" module>
</style>
