<template lang="html">
  <div :class="$style.home">
    <Heador/>

    <Enters :items="entersData"/>
    <Chioce :items="choiceData"/>
    <Mission :items="missionData"/>
    <Insurance :items="insuranceData"/>
    <New :items="newData"/>
    <Copyright/>

    <NavBar/>
  </div>

</template>

<script>
import axios from "axios"
import {mapMutations} from "vuex"

import Heador from "public/Header.vue";
import NavBar from "public/navBar.vue";

import Enters from "./enters.vue";
import Chioce from "./choice.vue";
import Mission from "./mission.vue";
import Insurance from "./insurance.vue";
import New from "./new.vue";
import Copyright from "./copyright.vue";

export default {
  components: {
    Heador,
    Enters,
    Chioce,
    Mission,
    Insurance,
    New,
    Copyright,
    NavBar
  },
  data() {
    return {
      entersData: [],
      choiceData: [],
      missionData: [],
      insuranceData: [],
      newData: []
    }
  },
  methods: {
    getHomeInfo(data, callback) {
      axios.get('api/home.json').then( (res) => {
        let homeData = JSON.parse(JSON.stringify(res.data));
        this.entersData = homeData.enters;
        this.choiceData = homeData.choice.items;
        this.missionData = homeData.mission;
        this.insuranceData = homeData.insurance;
        this.newData = homeData.new;
      });
    },
    ...mapMutations(["headtitle"])
  },
  mounted() {
    this.getHomeInfo()
    this.headtitle("京东金融")
  }
}
</script>

<style lang="scss" module>
  .home{
    background: #f5f5f5;
  }
</style>
