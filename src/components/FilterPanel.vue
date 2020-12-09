<template>
  <div id="filter-form" class="mt-3">
    <b>Filter by:</b><br>
    <div id="filter-inputs">
      Status
      <b-form-select
        v-model="status"
        :options="possibleStatuses"
      ></b-form-select>

      Type
      <b-form-select
        v-model="type"
        :options="possibleTypes"
      ></b-form-select>
    </div>
  
    <b-button class="mb-5" v-on:click.prevent="filter">Filter</b-button><br>


    <b>Prioritize by:</b><br>
    <div id="filter-inputs">
      <!-- <b-form-checkbox-group
        v-model="metrics"
        :options="possibleMetrics"
      ></b-form-checkbox-group> -->
      <b-form-select
        v-model="metrics"
        :options="possibleMetrics"
      ></b-form-select>
    </div>
  
    <b-button v-on:click.prevent="sort">Sort</b-button>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";
export default {
  name: "FilterPanel",
  data() {
    return {
      status:"",
      type:"",
      metrics:[],
      errors: [],
      possibleStatuses: [""],
      possibleTypes: [""],
      possibleMetrics: ["Total COVID Safety Rating"],
      success: "",
    };
  },
  mounted: function () {
    this.loadStatuses();
    this.loadBusinessTypes();
    this.loadMetrics();
  },
  methods: {
    loadStatuses: function () {
      axios.get("/api/business/statuses").then((response) => {
        this.possibleStatuses = this.possibleStatuses.concat(response.data);
      });
    },
    loadBusinessTypes: function () {
      axios.get("/api/business/types").then((response) => {
        this.possibleTypes = this.possibleTypes.concat(response.data);
      });
    },
    loadMetrics: function() {
      axios.get("/api/metrics/list/general").then(response => {
        this.possibleMetrics = this.possibleMetrics.concat(response.data);
      });
    },
    filter: function(){
      let filters={type:this.type,status:this.status}
      eventBus.$emit('filter-submit', filters);
    },
    sort: function(){
      eventBus.$emit('sort-submit', this.metrics);
    }
  }
 
};
</script>