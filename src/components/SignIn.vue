<template>
  <div>
    <b-alert
      :show="errorDismissCountDown"
      dismissible
      variant="danger"
      @dismissed="errorDismissCountDown = 0"
      @dismiss-count-down="errorCountDownChanged"
    >
      <p>{{ errors }}</p>
    </b-alert>
    <b-form @submit.prevent="signIn">
      <b-form-group class="username-input-group">
        <b-form-input
          class="username-input"
          v-model="form.username"
          required
          placeholder="Enter Username"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="password-input-group">
        <b-form-input
          class="password-input"
          v-model="form.password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit">Sign in</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";
export default {
  name: "UserSignIn",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      dismissSecs: 10,
      dismissCountDown: 0,
      errorDismissCountDown: 0,
      errors: "",
    };
  },
  methods: {
    signIn: function () {
      const bodyContent = {
        username: this.form.username,
        password: this.form.password,
      };
      axios
        .post("/api/account/signin", bodyContent)
        .then((res) => {
          // handle success

          eventBus.$emit("signin-success", res.data.data);
        })
        .catch((err) => {
          // handle error
          this.errors = err.response.data.error;
          this.showErrorAlert();
        })
        .then(() => {
          // always executed
          this.resetForm();
        });
    },
    resetForm: function () {
      this.form.username = "";
      this.form.password = "";
    },

    showErrorAlert() {
      this.errorDismissCountDown = this.dismissSecs;
    },
    errorCountDownChanged(errorDismissCountDown) {
      this.errorDismissCountDown = errorDismissCountDown;
    },
  },
};
</script>

