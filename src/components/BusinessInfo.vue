<template>
  <div>
    <b-card
      :title="business.name"
      class="m-4"
    >

      <div v-if = "editing">
        <b-form-textarea
          id="textarea"
          v-model="description"
          placeholder="Enter new description"
          rows="2"
          maxlength="150"
        ></b-form-textarea>

        <b-form-group
          label-cols-sm="4"
          label="Business Type: "
          label-for="businessType">
          <b-form-select
            id="businessType"
            v-model.trim="type"
            :options="possibleTypes"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Status: "
          label-for="status"
          class="mt-1">
          <b-form-select
            id="status"
            v-model.trim="status"
            :options="possibleStatuses"
          ></b-form-select>
        </b-form-group>

        <u>Contact</u>

        <b-form-group
          label-cols-sm="4"
          label="Address: "
          label-for="address">
          <b-form-input
            id="address"
            v-model="address"
            placeholder="Enter new address"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Phone: "
          label-for="phone">
          <b-form-input
            id="phone"
            v-model="phone"
            placeholder="Enter new number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Email: "
          label-for="email">
          <b-form-input
            id="email"
            v-model="email"
            placeholder="Enter new email"
          ></b-form-input>
        </b-form-group>

        <u>Hours</u>
        <b-form-group
          label-cols-sm="4"
          label="Monday: "
          label-for="mondayHours">
          <b-form-input
            id="mondayHours"
            v-model="monday_hours"
            placeholder="Enter Monday hours"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Tuesday: "
          label-for="tuesdayHours">
          <b-form-input
            id="tuesdayHours"
            v-model="tuesday_hours"
            placeholder="Enter Tuesday hours"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Wednesday: "
          label-for="wednesdayHours">
          <b-form-input
            id="wednesdayHours"
            v-model="wednesday_hours"
            placeholder="Enter Wednesday hours"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Thursday: "
          label-for="thursdayHours">
          <b-form-input
            id="thursdayHours"
            v-model="thursday_hours"
            placeholder="Enter Thursday hours"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Friday: "
          label-for="fridayHours">
          <b-form-input
            id="fridayHours"
            v-model="friday_hours"
            placeholder="Enter Friday hours"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Saturday: "
          label-for="saturdayHours">
          <b-form-input
            id="saturdayHours"
            v-model="saturday_hours"
            placeholder="Enter Saturday hours"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Sunday: "
          label-for="sundayHours">
          <b-form-input
            id="sundayHours"
            v-model="sunday_hours"
            placeholder="Enter Sunday hours"
          ></b-form-input>
        </b-form-group>

        <div class="edit-info">

        <b-row class="mt-4" >
          <b-button class="ml-3" v-on:click="cancelChanges"> Cancel Changes</b-button>
          <b-button class="ml-2" v-on:click="saveChanges">Save Changes</b-button>
        </b-row>
        </div>
      </div>

      <div v-else>
        <b-card-sub-title>{{ business.description }}</b-card-sub-title><br>
        <p> Business Type: {{business.type}} </p>
        <p> Status: {{business.status}} </p>
        
        
        <p><u> Contact </u> </p>
        Address: {{business.address}} <br>
        Phone: {{business.phone}} <br>
        Email: {{business.email}} <br><br>

        <p><u> Hours </u></p>
        Monday: {{business.monday_hours}} <br>
        Tuesday: {{business.tuesday_hours}} <br>
        Wednesday: {{business.wednesday_hours}} <br>
        Thursday: {{business.thursday_hours}} <br>
        Friday: {{business.friday_hours}}<br>
        Saturday: {{business.saturday_hours}} <br>
        Sunday: {{business.sunday_hours}} <br>
        
        <b-button class="mt-4" v-on:click="editBusinessInfo">Edit business info</b-button>
      </div>

    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "BusinessProfile",
  data() {
    return {
      business: Object,
      editing: false,
      name: "",
      password: "",
      status: "",
      email: "",
      phone: "",
      type: "",
      description: "",
      address: "",
      monday_hours:"",
      tuesday_hours:"",
      wednesday_hours:"",
      thursday_hours:"",
      friday_hours:"",
      saturday_hours:"",
      sunday_hours:"",
      possibleStatuses: [],
      possibleTypes: []
    };
  },
  props: {
    businessID: Number
  },

  created: function() {
    this.loadStatuses();
    this.loadBusinessTypes();
    this.getBusiness();
  },

  methods: {
    getBusiness: function() {
      axios.get(`/api/business/id/${this.businessID}`).then(response => {
        this.business = response.data;
        this.name = this.business.name;
        this.password = this.business.password;
        this.status = this.business.status;
        this.email = this.business.email;
        this.phone = this.business.phone;
        this.type = this.business.type;
        this.description = this.business.description;
        this.address = this.business.address;
        this.monday_hours = this.business.monday_hours;
        this.tuesday_hours = this.business.tuesday_hours;
        this.wednesday_hours = this.business.wednesday_hours;
        this.thursday_hours = this.business.thursday_hours;
        this.friday_hours = this.business.friday_hours;
        this.saturday_hours = this.business.saturday_hours;
        this.sunday_hours = this.business.sunday_hours;
        }); 
    },
    editBusinessInfo: function(){
      this.editing = true;
    },
    
    cancelChanges: function(){
      this.editing = false;
      this.name = this.business.name;
      this.password = this.business.password;
      this.status = this.business.status;
      this.email = this.business.email;
      this.phone = this.business.phone;
      this.type = this.business.type;
      this.description = this.business.description;
      this.address = this.business.address;
      this.monday_hours = this.business.monday_hours;
      this.tuesday_hours = this.business.tuesday_hours;
      this.wednesday_hours = this.business.wednesday_hours;
      this.thursday_hours = this.business.thursday_hours;
      this.friday_hours = this.business.friday_hours;
      this.saturday_hours = this.business.saturday_hours;
      this.sunday_hours = this.business.sunday_hours;
    },
    saveChanges: function(){
      let req = this.$data;
      axios.put(`/api/business/id/${this.businessID}`, req).then( () => {
        this.newAddress = "";
        this.newPhone = "";
        this.editing = false;
        this.getBusiness();
      }).catch(err => {eventBus.$emit("update-business-error", err);})
    },
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
  }
};
</script>