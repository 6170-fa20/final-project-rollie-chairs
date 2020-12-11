<template>
  <div class='map'>
    <NavBar/>
    <MapObject />
  </div>
</template>

<script>

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
    }
  },

  methods: {

    }
};
</script>
