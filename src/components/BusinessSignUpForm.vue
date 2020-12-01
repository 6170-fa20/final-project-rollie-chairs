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
        maxlength="150"
      />
      <label for="status"
        >Choose a Status<abbr class="req" title="required">*</abbr>:</label
      >

      <select
        name="status"
        id="status"
        v-model.trim="status"
        type="text"
        placeholder="Status"
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
        placeholder="Business Type"
        required
      >
        <option
          v-for="bType in possibleTypes"
          v-bind:key="bType"
          v-bind:value="bType"
        >
          {{ bType }}
        </option>
      </select>
      <label for="address">Address:</label>
      <input
        id="address"
        v-model.trim="address"
        type="text"
        name="address"
        placeholder="Address"
      />
      <label for="mondayHours">Monday Hours:</label>
      <input
        id="mondayHours"
        v-model.trim="mondayHours"
        type="text"
        name="mondayHours"
        placeholder="Monday Hours"
      />
      <label for="tuesdayHours">Tuesday Hours:</label>
      <input
        id="tuesdayHours"
        v-model.trim="tuesdayHours"
        type="text"
        name="tuesdayHours"
        placeholder="Tuesday Hours"
      />
      <label for="wednesdayHours">Wednesday Hours:</label>
      <input
        id="wednesdayHours"
        v-model.trim="wednesdayHours"
        type="text"
        name="wednesdayHours"
        placeholder="Wednesday Hours"
      />
      <label for="thursdayHours">Thursday Hours:</label>
      <input
        id="thursdayHours"
        v-model.trim="thursdayHours"
        type="text"
        name="thursdayHours"
        placeholder="Thursday Hours"
      />
      <label for="fridayHours">Friday Hours:</label>
      <input
        id="fridayHours"
        v-model.trim="fridayHours"
        type="text"
        name="fridayHours"
        placeholder="Friday Hours"
      />
      <label for="saturdayHours">Saturday Hours:</label>
      <input
        id="saturdayHours"
        v-model.trim="saturdayHours"
        type="text"
        name="saturdayHours"
        placeholder="Saturday Hours"
      />
      <label for="sundayHours">Sunday Hours:</label>
      <input
        id="sundayHours"
        v-model.trim="sundayHours"
        type="text"
        name="sundayHours"
        placeholder="Sunday Hours"
      />
      <label for="metrics">Preset Metrics:</label>
      <ul id="metricslist">
        <li v-for="metric in presetMetrics" :key="metric">
          {{ metric }}
        </li>
      </ul>
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
import { eventBus } from "../main";
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
      mondayHours: "",
      tuesdayHours: "",
      wednesdayHours: "",
      thursdayHours: "",
      fridayHours: "",
      saturdayHours: "",
      sundayHours: "",
      errors: [],
      possibleStatuses: [],
      possibleTypes: [],
      presetMetrics: ["Staff face coverings required and enforced", "Customer face coverings required and enforced", 
  "Occupancy limited to 50% capacity and enforced", "Visual social distancing markers to encourage 6ft distancing and enforced",
  "All aisles are directed and enforced"],
      id:"",
      success: "",
    };
  },
  mounted: function () {
    this.loadStatuses();
    this.loadBusinessTypes();
    this.loadMetrics();
  },
  methods: {
    loadMetrics: function () {},
    loadStatuses: function () {
      axios.get("/api/business/statuses").then((response) => {
        this.possibleStatuses = response.data;
      });
    },
    loadBusinessTypes: function () {
      axios.get("/api/business/types").then((response) => {
        this.possibleTypes = response.data;
      });
    },
    signUp: function(){
      this.createBusiness();
      this.setUpMetrics();
      this.id="";

    },
    setUpMetrics: function(){
      let isRestaurant=false;
      if(this.businessType==="Restaurant"){
        isRestaurant=true;
      }
      const bodyContent = {id:this.id,isRestaurant:isRestaurant};


    },
    createBusiness: function () {
      const bodyContent = {
        name: this.companyName,
        password: this.password,
        status: this.status,
        email: this.email,
        phone: this.phone,
        type: this.businessType,
        description: this.description,
        address: this.address,
        mondayHours: this.mondayHours,
        tuesdayHours: this.tuesdayHours,
        wednesdayHours: this.wednesdayHours,
        thursdayHours: this.thursdayHours,
        fridayHours: this.fridayHours,
        saturdayHours: this.saturdayHours,
        sundayHours: this.sundayHours,
      };
      axios
        .post("/api/business", bodyContent)
        .then((business) => {
          // handle success
          this.id=business.id;
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