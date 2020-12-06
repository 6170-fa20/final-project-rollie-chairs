<template>
  <div>
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

    <div v-if="errors.length" class="error-message" style="width: 250px">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
      </ul>
    </div>
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
      errors: [],
    };
  },
  methods: {
    signIn: function () {
      const bodyContent = {
        username: this.form.username,
        password: this.form.password,
      };
      axios
        .post("/api/account/SignIn", bodyContent)
        .then((res) => {
          // handle success

          eventBus.$emit("signin-success", res.data.businessID);
        })
        .catch((err) => {
          // handle error
          this.errors.push(this.$cookie.get("scope-auth"));
          this.errors.push(err.response.data.error);
        })
        .then(() => {
          // always executed
          this.resetForm();
          this.clearMessages();
        });
    },
    resetForm: function () {
      this.form.username = "";
      this.form.password = "";
    },
    clearMessages: function () {
      setInterval(() => {
        this.errors = [];
      }, 5000);
    },
  },
};
</script>

