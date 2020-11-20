<template>
  <div class='business-profile'>
    <BusinessInfo
            v-bind:businessID="businessID"
    />
    <!-- <MetricsList/> -->
    <p> METRICS </p>
  </div>
</template>

<script>
import BusinessInfo from "../components/BusinessInfo.vue";
//import MetricsList from "../components/MetricsList.vue";

export default {
  name: "businessProfile",
  components: {
    BusinessInfo,
    //MetricsList
  },
  data() {
    return {
      businessID: Number(this.$route.params.businessID),
      editingInfo: false,
      isSignedIn: this.$cookie.get("scope-auth")? true: false,
      /* loggedInAsBusiness: this.$cookie.get("scope-auth").ID === business.ID */
    };
  },
  methods: {
    editInfo: function(){
      this.editingInfo = true;
    }
  }
};
</script>