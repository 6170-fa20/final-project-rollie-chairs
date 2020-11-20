<template>
  <div class='business-profile'>
    <BusinessInfo/> 
    <div class="metrics-container">  
      <p>Comments will go here </p>
    </div>
  </div>
</template>

<script>
import BusinessInfo from "../components/BusinessInfo.vue";

export default {
  name: "businessProfile",
  components: {
    BusinessInfo
  },
  data() {
    return {
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