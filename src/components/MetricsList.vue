<template>
  <div class="ml-5">
    <div id="safety-rating">
      <p><b>COVID Safety Rating: {{score}}</b></p>
    </div>
    <b-popover target="safety-rating" triggers="hover" placement="top">
      <template #title>How is the COVID Safety Rating determined?</template>
      We calculate the rating by taking the ratio of <sup>confirms</sup> &#8260; <sub>total votes</sub> for each safety metric, and then averaging those together.
    </b-popover>
    <div>
      <div v-if='success' class="success-message">
        {{ success }}
      </div>
      <div v-if='error' class="error-message">
        {{ error }}
      </div>

      <div class="metric-container">
        <b-list-group>
          <b-list-group-item v-for="metric in metrics" v-bind:key="metric.metric_id">
            <Metric v-bind:metric="metric"/>
          </b-list-group-item>
        </b-list-group>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";
import Metric from "./Metric";

export default {
  name: "MetricsList",
  components: { Metric },
  data() {
    return {
      error: "",
      success: "",
      metrics: [],
      score: "No rating yet"
    };
  },

  props: {
    businessID: Number
  },

  created: function() {

    eventBus.$on("confirm-success", () => {
      this.loadMetrics();
    });
    eventBus.$on("deny-success", () => {
      this.clearMessages();
      this.loadMetrics();
    });
  },

  mounted: function() {
    this.loadMetrics();
  },

  methods: {
    loadMetrics: function() {
      axios.get(`/api/metrics/${this.businessID}`).then(response => {
        this.metrics = response.data;
        let allScores = this.metrics.map(metric => metric.confirms/(metric.confirms + metric.denies));
        let totalScore = allScores.reduce((acc, current) => acc + current)*100/this.metrics.length;
        this.score = isNaN(totalScore)? "No rating yet!" :`${Math.round(totalScore)}%`;
      });
    },

    clearMessages: function() {
      setInterval(() => {
        this.success = "";
        this.error = "";
      }, 7000);
    },
    getTitle: function() {
      return `Safety Rating: ${this.score}`
    }
  }
};
</script>