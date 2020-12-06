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
import { eventBus } from "../main";
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

  props: {
    search: String
  },

  mounted: function() {
    if (this.search){
      this.searchBusinesses(this.search);
    }else{
      this.loadAllBusinesses();
    }
    eventBus.$on("search-success", (name) =>
      {this.searchBusinesses(name)});
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

    searchBusinesses: function(name) {
      axios.get(`/api/business/results/`+name).then(response => {
        if (response.data.length === 0){
          this.businesses = [];
          this.success = "No businesses match your search";
        }else{
          this.businesses = response.data.length > 1? response.data: [response.data];
          this.success = "The following businesses match your search for " + name;
        }
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