<template>
  <div>
    <div class = "secondary-header">{{ business.name}}</div>
    <div class="container" v-if = "editing">
      <div>
        <label for="status">Edit Status: </label>
        <select
          name="status"
          id="status"
          v-model.trim="status"
          type="text"
        >
        <option
          v-for="stat in possibleStatuses"
          v-bind:key="stat"
          v-bind:value="stat"
        >
          {{ stat }}
        </option>

        </select>
      </div>
      <div>
        <label for="businessType"
        >Business Type:</label>
    
      <select
        name="businessType"
        id="businessType"
        v-model.trim="type"
        type="text"
      >
        <option
          v-for="bType in possibleTypes"
          v-bind:key="bType"
          v-bind:value="bType"
        >
          {{ bType }}
        </option>
        
      </select>
      </div>
      <div class= "edit-info">
        <label for="description" >Description:</label>
        <textarea
          id="description"
          v-model.trim="description"
          type="text"
          name="description"
          placeholder="Description"
          maxlength="150"
        />
      </div>
      
      <div class="edit-info">
      <label for="email"
        >Email:</label
      >
      <input
        id="email"
        v-model.trim="email"
        type="text"
        name="email"
        placeholder="Email"
      />
      </div>
      <p> Address: <input class="edit" v-model.trim='address' type="text" name="editAddress" placeholder="Enter New Address" > </p>
      <p> Phone: <input class="edit" v-model.trim='phone' type="text" name="editPhone" placeholder="Enter New Phone #" > </p>
      <div class="edit-info">
      <label for="mondayHours">Monday Hours:</label>
      <input
        id="mondayHours"
        v-model.trim="monday_hours"
        type="text"
        name="mondayHours"
        placeholder="Monday Hours"
      />
      </div>
      <div class="edit-info">
      <label for="tuesdayHours">Tuesday Hours:</label>
      <input
        id="tuesdayHours"
        v-model.trim="tuesday_hours"
        type="text"
        name="tuesdayHours"
        placeholder="Tuesday Hours"
      />
      </div>
      <div class="edit-info">
      <label for="wednesdayHours">Wednesday Hours:</label>
      <input
        id="wednesdayHours"
        v-model.trim="wednesday_hours"
        type="text"
        name="wednesdayHours"
        placeholder="Wednesday Hours"
      />
      </div>
      <div class="edit-info">
      <label for="thursdayHours">Thursday Hours:</label>
      <input
        id="thursdayHours"
        v-model.trim="thursday_hours"
        type="text"
        name="thursdayHours"
        placeholder="Thursday Hours"
      />
      </div>
      <div class="edit-info">
      <label for="fridayHours">Friday Hours:</label>
      <input
        id="fridayHours"
        v-model.trim="friday_hours"
        type="text"
        name="fridayHours"
        placeholder="Friday Hours"
      />
      </div>
      <div class="edit-info">
      <label for="saturdayHours">Saturday Hours:</label>
      <input
        id="saturdayHours"
        v-model.trim="saturday_hours"
        type="text"
        name="saturdayHours"
        placeholder="Saturday Hours"
      />
      </div>
      <div class="edit-info">
      <label for="sundayHours">Sunday Hours:</label>
      <input
        id="sundayHours"
        v-model.trim="sunday_hours"
        type="text"
        name="sundayHours"
        placeholder="Sunday Hours"
      />
      </div>
      <div class="edit-info">
      <button v-on:click="cancelChanges"> Cancel Changes</button>
      <button v-on:click="saveChanges">Save Changes</button>
      </div>
    </div>

    <div class="container" v-else>
      <p> Status: {{business.status}} </p>
      <p> Business Type: {{business.type}} </p>
      <p> Description: {{business.description}} </p>
      <p> Email: {{business.email}} </p>
      <p> Monday Hours: {{business.monday_hours}} </p>
      <p> Tuesday Hours: {{business.tuesday_hours}} </p>

      <p> Wednesday Hours: {{business.wednesday_hours}} </p>
      <p> Thursday Hours: {{business.thursday_hours}} </p>
      <p> Friday Hours: {{business.friday_hours}} </p>
      <p> Saturday Hours: {{business.saturday_hours}} </p>
      <p> Sunday Hours: {{business.sunday_hours}} </p>
      <p> Address: {{business.address}} </p>

      <p> Phone: {{business.phone}} </p>
      <button v-on:click="editBusinessInfo">Edit business info</button>
    </div>
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