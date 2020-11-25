<template>
  <div>
    <form
      id="sign-up"
      class="component"
      v-on:submit.prevent="signUp"
      method="post"
    >
      <label for="companyName"
        >Company Name<abbr class="req" title="required">*</abbr>:</label
      >
      <input
        id="companyName"
        v-model.trim="companyName"
        type="text"
        name="companyName"
        placeholder="Company name"
        required
      />
      <label for="password"
        >Password<abbr class="req" title="required">*</abbr>:</label
      >
      <input
        id="password"
        v-model.trim="password"
        type="text"
        name="password"
        placeholder="Password"
        required
      />
      <label for="description">Description:</label>
      <input
        id="description"
        v-model.trim="description"
        type="text"
        name="description"
        placeholder="Description"
      />
      <label for="status"
        >Choose a Status<abbr class="req" title="required">*</abbr>:</label
      >

      <select
        name="status"
        id="status"
        v-model.trim="status"
        type="text"
        required
      >
        <option
          v-for="stat in possibleStatuses"
          v-bind:key="stat"
          v-bind:value="stat"
        >
          {{ stat }}
        </option>
      </select>
      <label for="email"
        >Email<abbr class="req" title="required">*</abbr>:</label
      >
      <input
        id="email"
        v-model.trim="email"
        type="text"
        name="email"
        placeholder="Email"
        required
      />
      <label for="phone">Phone:</label>
      <input
        id="phone"
        v-model.trim="phone"
        type="text"
        name="phone"
        placeholder="Phone"
      />
      <label for="businessType"
        >Choose a Business Type<abbr class="req" title="required">*</abbr
        >:</label
      >

      <select
        name="businessType"
        id="businessType"
        v-model.trim="businessType"
        type="text"
        required
      >
        <option value="restaurant">restaurant</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <label for="address">Address:</label>
      <input
        id="address"
        v-model.trim="address"
        type="text"
        name="address"
        placeholder="Address"
      />
      <div><abbr class="req" title="required">*</abbr>:Required Fields</div>
      <input type="submit" value="Submit" class="button" />
    </form>
    <div v-if="success" class="success-message">
      {{ success }}
    </div>
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
import { eventBus } from "../main"
export default {
  name: "BusinessSignUpForm",

  data() {
    return {
      companyName: "",
      password: "",
      description: "",
      email: "",
      phone: "",
      status: "",
      businessType: "",
      address: "",
      errors: [],
      possibleStatuses: [],
      success: "",
    };
  },
  mounted: function () {
    this.loadStatuses();
  },
  methods: {
    loadStatuses: function () {
      axios.get("/api/business/statuses").then((response) => {
        this.possibleStatuses = response.data;
      });
    },
    signUp: function () {
      const bodyContent = {
        name: this.companyName,
        password: this.password,
        status: this.status,
        email: this.email,
        phone: this.phone,
        type: this.businessType,
        description: this.description,
        address: this.address,
      };
      axios
        .post("/api/business", bodyContent)
        .then((business) => {
          // handle success
          this.success = "Business created successfully!";
          eventBus.$emit("create-business-success", business);
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
      this.companyName = "";
      this.password = "";
      this.description = "";
      this.email = "";
      this.phone = "";
      this.status = "";
      this.businessType = "";
    },
    clearMessages: function () {
      setInterval(() => {
        this.errors = [];
        this.success = "";
      }, 5000);
    },
  },
};
</script>