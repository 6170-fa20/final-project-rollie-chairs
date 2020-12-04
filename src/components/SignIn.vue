<template>
  <div>
    <div>{{temp}}</div>
    <form id="sign-in" class='component' v-on:submit.prevent="signIn" method="post">
      <input id='username' v-model.trim='username' type='text' name='username' placeholder="User's name" required>
      <input id='password' v-model.trim='password' type='text' name='password' placeholder="Password" required>
      <input type='submit' value='Sign In' class="button">
    </form>
    <div v-if='errors.length' class="error-message" style="width: 250px;">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for='error in errors' v-bind:key='error.id'>{{ error }}</li>
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
      errors: [],
      username: "",
      password: "",
      temp:""
    }
  },
  methods: {
    signIn: function() {
      const bodyContent = { username: this.username , password: this.password};
        axios
          .post("/api/account/SignIn", bodyContent)
          .then((res) => {
            // handle success
            this.temp=res.data.username;
            eventBus.$emit('signin-success', res.data.username);
          })
          .catch(err => {
            // handle error
            this.errors.push(err.response.data.error);
          })
          .then(() => {
            // always executed
            this.resetForm();
            this.clearMessages();
          });
    },
    resetForm: function() {
      this.username = "";
      this.password = "";
    },
    clearMessages: function() {
      setInterval(() => {
        this.errors = [];
      }, 5000);
    }
  }
}
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