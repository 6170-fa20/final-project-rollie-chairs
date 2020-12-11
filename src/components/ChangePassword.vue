<template>
  <div>
    <b-form @submit.prevent="changePassword">
      <b-form-group class="password-input-group">
        <b-form-input
          class="password-input"
          v-model="form.password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit">Change Password</b-button>
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
  name: "ChangePassword",
  data() {
    return {
      form: {
        password: "",
      },
      password: "",
      errors: [],
      success: "",
    };
  },
  methods: {
    changePassword: function () {
      let bodycontent = { password: this.form.password };
      axios
        .put("/api/account/", bodycontent)
        .then(eventBus.$emit("password-change-success", true));
      this.resetForm();
      this.clearMessages();
    },
    resetForm: function () {
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