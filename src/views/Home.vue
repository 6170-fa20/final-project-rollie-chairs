<template>
  <div class='home-page'>
    <NavBar/>
    
    <b-container>
        <FilterPanel/>
        <BusinessContainer/>
    </b-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import BusinessContainer from "../components/BusinessContainer.vue"
import FilterPanel from "../components/FilterPanel.vue"
export default {
  name: "Home",
  components:{
    NavBar,
    BusinessContainer,
    FilterPanel
  }
};
</script>