<template>
  <div>
    <NavBar/>
    <div class="business-profile">
      <b-row no-gutters class="m-5">
        <b-col cols="4">
          <BusinessInfo v-bind:businessID="businessID" />
        </b-col>
        <b-col>
          <MetricsList  v-bind:businessID="businessID" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import BusinessInfo from "../components/BusinessInfo.vue";
import MetricsList from "../components/MetricsList.vue";
import NavBar from "../components/NavBar.vue"

export default {
  name: "businessProfile",
  components: {
    BusinessInfo,
    MetricsList,
    NavBar
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