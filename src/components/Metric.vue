<template>
  <div class="metric">
    <div class="metric-name">
      <b-row>
        <b-col>
          <p>{{metric.metric}}: </p>
        </b-col>
        <b-col cols="3">
          <p><b-button class="mr-2" v-on:click="addConfirm">Confirm</b-button> {{metric.confirms}}</p>
          <p> <b-button class="mr-2" v-on:click="addDeny">Deny</b-button> {{metric.denies}}</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "Metric",
  props: {
    metric: Object
  },
  data() {
    return {
    };
  },
  methods: {
    addConfirm: function() {
      axios.put(`/api/metrics/confirmation/${this.metric.metric_id}`)
           .then((res) => {eventBus.$emit("confirm-success", res);})
           .catch(err => {eventBus.$emit("confirm-error", err);})
    },
    addDeny: function() {
      axios.put(`/api/metrics/refutation/${this.metric.metric_id}`)
           .then((res) => {eventBus.$emit("deny-success", res);})
           .catch(err => {eventBus.$emit("deny-error", err);})
    }
  }
};
</script>
