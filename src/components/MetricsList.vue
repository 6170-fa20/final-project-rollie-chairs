<template>
  <div class="metrics-list">
    <div class="headers profile-headers">
      Metrics
    </div>

    <div>
      <div v-if='success' class="success-message">
        {{ success }}
      </div>
      <div v-if='error' class="error-message">
        {{ error }}
      </div>

    <!--
      <div class="view-container">

        <button v-bind:class="{buttonActive: allActive, button: allInactive }" 
                v-on:click="loadAllFreets">View All Freets
        </button>
        <button v-bind:class="{buttonActive: popularActive, button: popularInactive }" 
                v-on:click="loadPopularFreets">View Popular Freets
        </button>
        <div class="container">
            <input v-bind:class="{buttonActive: authorActive, button: authorInactive }" 
                   v-on:click="loadAuthorFreets" type='submit' value="View Author Freets" id="author" class="button">
            <input id='author' v-model.trim='author' type='text' name='author'  placeholder="Author's Username">
        </div>
      </div>
    -->

      <!-- will hold all of the freets for the selected filter-->
      <div class="metrics-list">  
        <div>
            <Metric
            v-for="metric in metrics"
            v-bind:key="metric.ID"
            v-bind:metric="metric"
            />
        </div>
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
      metrics: []
    };
  },

  created: function() {

    eventBus.$on("confirm-success", () => {
      this.loadMetrics;
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
      axios.get(`/api/metrics/business`).then(response => {
        this.metrics = response.data;
      });
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