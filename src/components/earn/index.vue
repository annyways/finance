<template lang="html">
  <div :class="$style.earn">
    <Heador/>
    <eslider/>
    <enters/>
    <Mission :items="missionData"/>
    <Ads/>
    <NavBar/>
  </div>

</template>

<script>
import axios from "axios"
import {mapMutations} from "vuex"

import Heador from "public/Header.vue";
import NavBar from "public/navBar.vue";

import Eslider from './eslider.vue'
import Enters from './enters.vue'
import Mission from "../home/mission.vue";
import Ads from "./ads.vue";


export default {
  data() {
    return {
      missionData: []
    }
  },
  components: {
    Heador,
    Eslider,
    Enters,
    Mission,
    Ads,
    NavBar
  },
  methods: {
    getInfo(data, callback) {
      axios.get('/api/home.json').then( (res) => {
        let homeData = JSON.parse(JSON.stringify(res.data));
        this.missionData = homeData.mission;
      });
    },
    ...mapMutations(["headtitle"])
  },
  mounted() {
    this.getInfo()
    this.headtitle("赚钱")
  }
}
</script>

<style lang="scss" module>
.earn{
  background: #f5f5f5;
}
</style>
