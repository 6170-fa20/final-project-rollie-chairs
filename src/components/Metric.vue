<template>
  <div class="metric">
    <div class="metric-name">
      <b-row>
        <b-col>
          <p>{{metric.metric}}: </p>
        </b-col>
        <b-col cols="3">
          <p> <b-button class="mr-2" v-on:click="addConfirm">Confirm</b-button> {{metric.confirms}}</p>
          <p> <b-button class="mr-2" v-on:click="addDeny">Deny</b-button> {{metric.denies}}</p>
        </b-col>
    <b-alert
      :show="errorDismissCountDown"
      dismissible
      variant="danger"
      @dismissed="errorDismissCountDown = 0"
      @dismiss-count-down="errorCountDownChanged"
    >
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
      </ul>
    </b-alert>
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
      success: "",
      errors: [],
      dismissSecs: 10,
      dismissCountDown: 0,
      errorDismissCountDown: 0,
      signedInAsUser: this.$cookie.get("scope-auth") && (this.$cookie.get("business-auth") == "undefined")
    };
  },
  created: function(){
    eventBus.$on("signin-success", () =>
      {this.signedInAsUser = this.$cookie.get("scope-auth") && (this.$cookie.get("business-auth") == "undefined")});
    eventBus.$on("signout-success", () =>
      {this.signedInAsUser = false;});
  },
  methods: {
    addConfirm: function() {
      if (!this.signedInAsUser){
        this.errors.push("You must be signed into a customer account to confirm metrics");
        this.showErrorAlert();
      }else{
        axios.put(`/api/metrics/confirmation/${this.metric.metric_id}`, {userID: this.$cookie.get("scope-auth")})
            .then((res) => {
              eventBus.$emit("confirm-success", res);
              this.success = "You have successfully confirmed this metric!"
              })
            .catch(err => {
              eventBus.$emit("confirm-error", err);
              this.errors.push(err.response.data.error);
              this.showErrorAlert();
              })
      }
    },
    addDeny: function() {
      if (!this.signedInAsUser){
        this.errors.push("You must be signed into a customer account to deny metrics");
        this.showErrorAlert();
      }else{
        axios.put(`/api/metrics/refutation/${this.metric.metric_id}`, {userID: this.$cookie.get("scope-auth")})
            .then((res) => {
              eventBus.$emit("deny-success", res);
              this.success = "You have successfully denied this metric!"
              })
            .catch(err => {
              eventBus.$emit("deny-error", err);
              this.errors.push(err.response.data.error);
              this.showErrorAlert();
              })
      }
    },
    showErrorAlert() {
      this.errorDismissCountDown = this.dismissSecs;
    },
    errorCountDownChanged(errorDismissCountDown) {
      this.errorDismissCountDown = errorDismissCountDown;
    },
  }
};
</script>
