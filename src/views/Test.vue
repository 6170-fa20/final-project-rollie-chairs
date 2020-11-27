<template>
  <div>
    <NavBar/>
    <!-- <BusinessContainer/> -->
    <BusinessListing v-bind:businessID="businessID"/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
// import BusinessContainer from "../components/BusinessContainer.vue"
import BusinessListing from "../components/BusinessListing.vue"
export default {
  name: "Test",
  components:{
    NavBar,
    // BusinessContainer,
    BusinessListing
  },
  data() {
    return {
      businessID: Number(this.$route.params.businessID),
    };
  },
};
</script>