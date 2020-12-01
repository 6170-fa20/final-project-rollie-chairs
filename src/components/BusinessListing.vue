<template>
  <div class="business-profile-info">
    <div class="business-name"> 
      <router-link :to="getBusinessLink()">
        <b>{{ business.name}} </b><br>
      </router-link>
      <i>{{ business.description }}</i>
      <p>Safety Rating: {{ score }} </p>
      <p> Business Type: {{business.type}} </p>
      <p> Status: {{business.status}} </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { eventBus } from "../main";

export default {
  name: "BusinessListing",
  data() {
    return {
      business: Object,
      score: "No rating yet"
    };
  },
  props: {
    businessID: Number
  },

  created: function() {
    this.getBusiness();
    this.loadMetrics();
  },

  methods: {
    getBusiness: function() {
      axios.get(`/api/business/id/${this.businessID}`).then(response => {
        this.business = response.data;
      });
    },
    loadMetrics: function() {
      axios.get(`/api/metrics/${this.businessID}`).then(response => {
        let metrics = response.data;
        let allScores = metrics.map(metric => metric.confirms/(metric.confirms + metric.denies));
        let totalScore = allScores.reduce((acc, current) => acc + current)*100/metrics.length;
        this.score = `${Math.round(totalScore)}%`;
      });
    },
    getBusinessLink: function() {
      return "/businesses/" + this.businessID;
    }
  }
};
</script>