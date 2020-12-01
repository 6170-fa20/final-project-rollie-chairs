<template>
  <div class='map'>
    <NavBar/>
    <MapObject v-bind:businesses="businesses"/>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import MapObject from "../components/MapObject.vue";
export default {
  name: "Map",
  components:{
    NavBar,
    MapObject
  },

  data() {
    return {
        businesses: []
    }
  },
  methods: {
    getAllBusinesses() {
        /* eslint-disable no-console */
        console.log("trying");
        axios.get("/api/business/").then(response => {
          this.businesses = response.data;
        });
    }
  },
  mounted() {
    this.getAllBusinesses();
  }
};
</script>
