<template>
  <div class="business-profile-info">
    <div class="business-name"> 
      <router-link :to="getBusinessLink()">
        <b>{{ business.name}} </b><br>
      </router-link>
      <p><i>{{ business.description }}</i></p>
      <div id="safety-rating">
        <p><b>COVID Safety Rating: {{score}}</b></p>
      </div>
      <b-popover target="safety-rating" triggers="hover" placement="top">
        <template #title>How is the COVID Safety Rating determined?</template>
        We calculate the rating by taking the ratio of <sup>confirms</sup> &#8260; <sub>total votes</sub>  for each safety metric, and then averaging those together.
      </b-popover>
      <p> Business Type: {{business.type}} </p>
      <div v-if="business.status">
        <p>Status: {{ business.status }}</p>
      </div>
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
        this.score = isNaN(totalScore)? "No rating yet!" :`${Math.round(totalScore)}%`;
      });
    },
    getBusinessLink: function() {
      return "/businesses/" + this.businessID;
    }
  }
};
</script>