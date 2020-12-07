<template>
  <div>
     <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>Business successfully created</p>
      
    </b-alert>
    <b-alert
      :show="errorDismissCountDown"
      dismissible
      variant="danger"
      @dismissed="errorDismissCountDown=0"
      @dismiss-count-down="errorCountDownChanged"
    >
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
      </ul>
      
    </b-alert>

    <b-button v-b-toggle.restaurantPresetMetrics class="m-1"
      >Restaurant Preset Metrics</b-button
    >
    <b-button v-b-toggle.nonrestaurantPresetMetrics class="m-1"
      >Non-Restaurant Preset Metrics</b-button
    >

    <b-collapse id="restaurantPresetMetrics">
      <b-card
        ><b-list-group>
          <b-list-group-item
            v-for="metric in presetMetricsRestuarant"
            :key="metric"
          >
            {{ metric }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-collapse>
    <b-collapse id="nonrestaurantPresetMetrics">
      <b-card
        ><b-list-group>
          <b-list-group-item v-for="metric in presetMetrics" :key="metric">
            {{ metric }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-collapse>

    <b-form @submit.prevent="signUp">
      <b-form-group
        class="company-name-input-group"
        label-for="company-name-input"
      >
        <template v-slot:label>
          Company Name:<span class="text-danger">*</span>
        </template>
        <b-form-input
          id="company-name-input"
          v-model="form.companyName"
          required
          placeholder="Enter Company Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="company-password-input-group"
        label-for="company-password-input"
      >
        <template v-slot:label>
          Password:<span class="text-danger">*</span>
        </template>
        <b-form-input
          id="company-password-input"
          v-model="form.password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="description-input-group"
        label="Description:"
        label-for="description-input"
      >
        <b-form-input
          id="description-input"
          v-model="form.description"
          placeholder="Enter Description"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="status-input-group"
        label="Status:"
        label-for="status-input"
      >
        <b-form-select
          id="status-input"
          v-model="form.status"
          :options="possibleStatuses"
        ></b-form-select>
      </b-form-group>
      <b-form-group id="email-input-group" label-for="email-input">
        <template v-slot:label>
          Email:<span class="text-danger">*</span>
        </template>
        <b-form-input
          id="email-input"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter Email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="phone-input-group"
        label="Phone:"
        label-for="phone-input"
      >
        <b-form-input
          id="phone-input"
          v-model="form.phone"
          placeholder="Enter Phone Number"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="type-input-group" label-for="type-input">
        <template v-slot:label>
          Business Type:<span class="text-danger">*</span>
        </template>
        <b-form-select
          id="type-input"
          v-model="form.businessType"
          :options="possibleTypes"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="address-input-group"
        label="Address:"
        label-for="address-input"
      >
        <b-form-input
          id="Address-input"
          v-model="form.address"
          placeholder="Enter Address"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="monday-input-group"
        label="Monday Hours:"
        label-for="monday-input"
      >
        <b-form-input
          id="monday-input"
          v-model="form.mondayHours"
          placeholder="Monday Hours"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="tuesday-input-group"
        label="Tuesday Hours:"
        label-for="tuesday-input"
      >
        <b-form-input
          id="tuesday-input"
          v-model="form.tuesdayHours"
          placeholder="Tuesday Hours"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="wednesday-input-group"
        label="Wednesday Hours:"
        label-for="wednesday-input"
      >
        <b-form-input
          id="wednesday-input"
          v-model="form.wednesdayHours"
          placeholder="Wednesday Hours"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="thursday-input-group"
        label="Thursday Hours:"
        label-for="thursday-input"
      >
        <b-form-input
          id="thursday-input"
          v-model="form.thursdayHours"
          placeholder="Thursday Hours"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="friday-input-group"
        label="Friday Hours:"
        label-for="Friday-input"
      >
        <b-form-input
          id="friday-input"
          v-model="form.fridayHours"
          placeholder="Friday Hours"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="saturday-input-group"
        label="Saturday Hours:"
        label-for="saturday-input"
      >
        <b-form-input
          id="saturday-input"
          v-model="form.saturdayHours"
          placeholder="Saturday Hours"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="sunday-input-group"
        label="Sunday Hours:"
        label-for="sunday-input"
      >
        <b-form-input
          id="sunday-input"
          v-model="form.sundayHours"
          placeholder="Sunday Hours"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit">Create Business</b-button>
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
  name: "BusinessSignUpForm",

  data() {
    return {
      form: {
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
        
      },
      dismissSecs: 10,
      dismissCountDown: 0,
      errorDismissCountDown:0,
      possibleStatuses: [],
      possibleTypes: [],
      presetMetrics: [],
      presetMetricsRestuarant: [],
      errors: [],
      starter: [{ text: "Select One", value: "" }],

      success: "",
    };
  },
  mounted: function () {
    this.loadStatuses();
    this.loadBusinessTypes();
    this.loadMetrics();
  },
  methods: {
    loadMetrics: function () {
      axios.get("/api/metrics/list/restaurants").then((response) => {
        this.presetMetricsRestuarant = response.data;
      });

      axios.get("/api/metrics/list/general").then((response) => {
        this.presetMetrics = response.data;
      });
    },
    loadStatuses: function () {
      axios.get("/api/business/statuses").then((response) => {
        this.possibleStatuses = this.starter.concat(response.data);
      });
    },
    loadBusinessTypes: function () {
      axios.get("/api/business/types").then((response) => {
        this.possibleTypes = [{ text: "Select One", value: "" }].concat(
          response.data
        );
      });
    },
    signUp: function () {
      this.createBusiness();
      this.setUpMetrics();
    },

    createBusiness: function () {
      const bodyContent = {
        name: this.form.companyName,
        password: this.form.password,
        status: this.form.status,
        email: this.form.email,
        phone: this.form.phone,
        type: this.form.businessType,
        description: this.form.description,
        address: this.form.address,
        mondayHours: this.form.mondayHours,
        tuesdayHours: this.form.tuesdayHours,
        wednesdayHours: this.form.wednesdayHours,
        thursdayHours: this.form.thursdayHours,
        fridayHours: this.form.fridayHours,
        saturdayHours: this.form.saturdayHours,
        sundayHours: this.form.sundayHours,
      };
      axios
        .post("/api/business", bodyContent)
        .then((business) => {
          // handle success
          this.showSuccessAlert();
          
          eventBus.$emit("create-business-success", business);
        })
        .catch((err) => {
          // handle error
          this.errors.push(err.response.data.error);
          this.showErrorAlert();
        })
        .then(() => {
          // always executed
          this.resetForm();
          this.clearMessages();
        });
    },
    resetForm: function () {
      this.form.companyName = "";
      this.form.password = "";
      this.form.description = "";
      this.form.email = "";
      this.form.phone = "";
      this.form.status = "";
      this.form.businessType = "";
      this.form.address = "";
      this.form.mondayHours = "";
      this.form.tuesdayHours = "";
      this.form.wednesdayHours = "";
      this.form.thursdayHours = "";
      this.form.fridayHours = "";
      this.form.saturdayHours = "";
      this.form.sundayHours = "";
    },
    clearMessages: function () {
      setInterval(() => {
        this.errors = [];
        this.success = "";
      }, 5000);
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    showSuccessAlert() {
        this.dismissCountDown = this.dismissSecs
      },
      showErrorAlert() {
        this.errorDismissCountDown = this.dismissSecs
      },
      errorCountDownChanged(errorDismissCountDown) {
        this.errorDismissCountDown = errorDismissCountDown
      },
  },
};
</script>
