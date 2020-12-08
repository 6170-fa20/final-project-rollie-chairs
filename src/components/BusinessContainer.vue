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
      originalBusinesses: [],
      businesses: []
    };
  },

  props: {
    search: String
  },

  created: function() {
    if (this.search){
      this.searchBusinesses(this.search);
    }else{
      this.loadAllBusinesses();
    }
    eventBus.$on("search-success", (name) =>
      {this.searchBusinesses(name)});
    eventBus.$on("filter-submit", (filters) => {
      this.filterBusinesses(filters)});
    eventBus.$on("sort-submit", (metrics) => {
      this.loadScores(metrics);
      // this.sortBusinesses()
    });
    eventBus.$on("resetBusinesses", () => {
      this.search = undefined;
      this.clearFilters();
      this.loadAllBusinesses();
    });
  },

  methods: {
    loadAllBusinesses: function() {
      axios.get(`/api/business/all`).then(response => {
        this.businesses = response.data;
        this.originalBusinesses = response.data;
        this.success = "Showing you all businesses on Scope"
      })
      .catch(error => {this.error = error.response.data.error});
      this.clearMessages();
    },

    searchBusinesses: function(name) {
      axios.get(`/api/business/results/`+name).then(response => {
        if (response.data.length === 0){
          this.businesses = [];
          this.originalBusinesses = [];
          this.success = "No businesses match your search";
        }else{
          this.businesses = response.data.length > 1? response.data: [response.data];
          this.originalBusinesses = this.businesses;
          this.success = "The following businesses match your search for " + name;
        }
        })
        .catch(error => {this.error = error.response.data.error});
      this.clearMessages();
    },

    filterBusinesses: function(filters){
      this.clearFilters();
      if (filters.type){
        this.businesses = this.businesses.filter(business => business.type === filters.type);
      }
      if (filters.status){
        this.businesses = this.businesses.filter(business => business.status === filters.status);
      }
      
      this.success = this.businesses.length === 0?"No businesses match those filters": "Here are the businesses that match those filters";
    },
    loadScores: function(metrics){
      let promises = [];
      for (let business of this.businesses) {
        promises.push(
          axios.get(`/api/metrics/${business.id}`).then(response => {
            let remaining_metrics = response.data;

            if (metrics != "Total COVID Safety Rating") {
              remaining_metrics = remaining_metrics.filter(metric => metrics.includes(metric.metric));
            }
            
            let allScores = remaining_metrics.map(metric => metric.confirms/(metric.confirms + metric.denies));
            let totalScore = allScores.reduce((acc, current) => acc + current)*100/remaining_metrics.length;
            business.score =  Math.round(totalScore);
            console.log(business);
          })
        )
        
      }
      Promise.all(promises).then(() => this.sortBusinesses());
      // this.businesses.sort(function (a, b) {
      //   return a.score - b.score;
      // });
      // this.success = "Here are the businesses, sorted by your priorities";
    },
    sortBusinesses: function(){
      this.businesses = this.businesses.sort(function (a, b) {
        if(isNaN(a.score) && !isNaN(b.score)){
          return 1;
        } else if(isNaN(b.score) && !isNaN(a.score)){
          return -1;
        } else if (a.score > b.score) {
          return -1;
        } else if (a.score < b.score) {
          return 1;
        } else {
          return 0;
        }
      });
      this.success = "Here are the businesses, sorted by your priorities";
    },
    clearFilters: function(){
      this.businesses = this.originalBusinesses;
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