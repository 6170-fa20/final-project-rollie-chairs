<template>
  <div class="business-profile-info">
    <!-- <div class="headers profile-headers">
      Browse Businesses
    </div> -->

    <div>
      <div v-if='success' class="success-message">
        {{ success }}
      </div>
      <div v-if='error' class="error-message">
        {{ error }}
      </div>


      <div class="business-container">  
        <b-list-group>
          <b-list-group-item v-for="business in businesses" v-bind:key="business.id">
            <BusinessListing v-bind:businessID="business.id"/>
          </b-list-group-item>
        </b-list-group>
            
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { eventBus } from "../main";
import BusinessListing from "./BusinessListing";

export default {
  name: "BusinessContainer",
  components: { BusinessListing },
  data() {
    return {
      error: "",
      success: "",
      businesses: []
    };
  },

  mounted: function() {
    this.loadAllBusinesses();
  },

  methods: {
    loadAllBusinesses: function() {
      axios.get(`/api/business/all`).then(response => {
        this.businesses = response.data;
        this.success = "Showing you all businesses on Scope"
      })
      .catch(error => {this.error = error.response.data.error});
      this.clearMessages();
    },

    clearMessages: function() {
      setInterval(() => {
        this.success = "";
        this.error = "";
      }, 7000);
    }
  }
};
</script>