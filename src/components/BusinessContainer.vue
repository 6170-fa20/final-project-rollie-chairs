<template>
  <div class="business-profile-info">
    <div class="headers profile-headers">
      Browse Businesses
    </div>

    <div>
      <div v-if='success' class="success-message">
        {{ success }}
      </div>
      <div v-if='error' class="error-message">
        {{ error }}
      </div>

      <div class="view-container">
      
        <!-- DROPDOWN FOR FILTER
        <select v-model.trim='businessType' type="text" >
            <option businessType="None">Volvo</option>
            <option businessType="Restaurant">Restaurant</option>
            <option businessType="Grocery Store"> Grocery Store </option>
            <option businessType="Shop">Shop</option>
        </select>
        <button v-bind:class="{buttonActive: allActive, button: allInactive }" 
                v-on:click="loadAllFreets">Filter by Business Type 
        </button>
        <button v-bind:class="{buttonActive: popularActive, button: popularInactive }" 
                v-on:click="loadPopularFreets">View Popular Freets
        </button>
        <div class="container">
            <input v-bind:class="{buttonActive: authorActive, button: authorInactive }" 
                   v-on:click="loadAuthorFreets" type='submit' value="View Author Freets" id="author" class="button">
            <input id='author' v-model.trim='author' type='text' name='author'  placeholder="Author's Username">
        </div>
        -->
      </div>

      <div class="business-container">  
        <div>
            <BusinessListing
            v-for="business in businesses"
            v-bind:key="business.ID"
            />
        </div>
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

  mounted: function() {
    this.loadAllBusinesses();
  },

  methods: {
    loadAllBusinesses: function() {
      axios.get(`/api/business/all`).then(response => {
        this.businesses = response.data;
        this.success = Showing you all businesses on Scope
      })
      .catch(error => {this.error = error.response.data.error});
      this.clearMessages();
    }

    clearMessages: function() {
      setInterval(() => {
        this.success = "";
        this.error = "";
      }, 7000);
    }
  }
};
</script>