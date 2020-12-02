<template>
  <div class="metric">
    <div class="metric-name">
      <p>{{metric.metric}}: </p>
      <p><button v-on:click="addConfirm">Confirm</button> {{metric.confirms}} / <button v-on:click="addDeny">Deny</button> {{metric.denies}}</p>
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
