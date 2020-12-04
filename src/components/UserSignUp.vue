<template>
  <div>
    <form id="sign-up" class='component' v-on:submit.prevent="signUp" method="post">
      <input id='username' v-model.trim='username' type='text' name='username' placeholder="User's name">
      <input id='password' v-model.trim='password' type='text' name='password' placeholder="Password">
      <input id='email' v-model.trim='email' type='text' name='email' placeholder="Email">
      <input type='submit' value='Create User Account' class="button">
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
  name: "SignUp",
  data() {
    return {
      errors: [],
      username: "",
      password:"",
      email: "" 
    }
  },
  methods: {
    signUp: function() {
      const bodyContent = { username: this.username, password: this.password, email:this.email };
        axios
          .post("/api/account/", bodyContent)
          .then(() => {
            // handle success
            eventBus.$emit('signup-success', true);
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
      this.username = ""
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