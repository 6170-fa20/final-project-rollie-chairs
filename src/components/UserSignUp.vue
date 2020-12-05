<template>
  <div>
    <b-form @submit="signUp()">
      <b-form-group class="username-input-group">
        <b-form-input
          class="username-input"
          v-model="form.username"
          required
          placeholder="Enter Username"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="password-input-group">
        <b-form-group
          class="email-input-group"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            class="email-input"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-input
          class="password-input"
          v-model="form.password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit">Sign Up</b-button>
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
  name: "SignUp",
  data() {
    return {
      errors: [],
      form: {
        username: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    signUp: function () {
      const bodyContent = {
        username: this.form.username,
        password: this.form.password,
        email: this.form.email,
      };
      axios
        .post("/api/account/", bodyContent)
        .then(() => {
          // handle success
          eventBus.$emit("signup-success", true);
        })
        .catch((err) => {
          // handle error
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
      this.form.email = "";
    },
    clearMessages: function () {
      setInterval(() => {
        this.errors = [];
      }, 5000);
    },
  },
};
</script>

<style scoped>
form {
  width: fit-content;
}
input[type="text"],
input[type="url"] {
  width: 15rem;
}
</style>