<template>
  <div class='home-page'>
    <NavBar/>
    <BusinessContainer/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import BusinessContainer from "../components/BusinessContainer.vue"
export default {
  name: "Home",
  components:{
    NavBar,
    BusinessContainer
  }
};
</script>