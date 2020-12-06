<template>
  <div id="filter-form">
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
  <!--   <form
      id="filterForm"
      class="component"
      v-on:submit.prevent="filter"
      method="post"
    >
   <label for="status">Status</label><br>

      <select
        name="status"
        id="status"
        v-model.trim="status"
        type="text"
        placeholder="Status"
        required
      >
        <option
          v-for="stat in possibleStatuses"
          v-bind:key="stat"
          v-bind:value="stat"
        >
          {{ stat }}
        </option>
      </select><br>
      <label for="businessType">Business Type</label>

      <select
        name="businessType"
        id="businessType"
        v-model.trim="businessType"
        type="text"
        placeholder="Business Type"
        required
      >
        <option
          v-for="bType in possibleTypes"
          v-bind:key="bType"
          v-bind:value="bType"
        >
          {{ bType }}
        </option>
      </select><br>
      
    </form> -->
    <b-button v-on:click.prevent="filter">Filter</b-button>
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
      errors: [],
      possibleStatuses: [],
      possibleTypes: [],
      success: "",
    };
  },
  mounted: function () {
    this.loadStatuses();
    this.loadBusinessTypes();
  },
  methods: {
    loadStatuses: function () {
      axios.get("/api/business/statuses").then((response) => {
        this.possibleStatuses = response.data;
      });
    },
    loadBusinessTypes: function () {
      axios.get("/api/business/types").then((response) => {
        this.possibleTypes = response.data;
      });
    },
    filter: function(){
      let filters={type:this.type,status:this.status}
      eventBus.$emit('filter-submit', filters);
    }
  }
 
};
</script>