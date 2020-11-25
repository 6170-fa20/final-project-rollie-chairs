<template>
  <div class="business-profile-info">
    <div class="business-name"> 
      <p>{{ business.name}} Safety Rating: INSERT RATING HERE </p>
    </div>
    <div class="business-profile-info" v-if = "editing">
      <p> Business Type: {{business.type}} </p>
      <p> Status: {{business.status}} </p>
      <!--
      <form action="/action_page.php">
        <label for="type">Choose a business type:</label>
        <select name="business-type" id="business-type">
          <option value="Closed">Closed</option>
          <option value="Delivery">Delivery</option>
          <option value="Take Out">Take Out</option>
          <option value="Outdoor Dining">Outdoor Dining</option>
          <option value="Indoor Dining">Indoor Dining</option>
        </select>
        <br><br>
        <input type="submit" value="Submit">
      </form>
      <p> Status: </p> <div class="dropdown" v-model = 'newStatus'>
                    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                      <a href="#">Closed</a>
                      <a href="#">Delivery</a>
                      <a href="#">Take Out</a>
                      <a href="#">Outdoor Dining</a>
                      <a href="#">Indoor Dining</a>
                    </div> 
      -->
      <p> Address: <input class="edit" v-model.trim='newAddress' type="text" name="editAddress" placeholder="Enter New Address" > </p>
      <p> Phone: <input class="edit" v-model.trim='newPhone' type="text" name="editPhone" placeholder="Enter New Phone #" > </p>
      <button v-on:click="cancelChanges"> Cancel Changes</button>
      <button v-on:click="saveChanges">Save Changes</button>
      
    </div>

    <div class="business-profile-info" v-else>
      <p> Business Type: {{business.type}} </p>
      <p> Status: {{business.status}} </p>
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
      newType: undefined,
      newStatus: undefined,
      newAddress: "",
      newPhone: ""
    };
  },
  props: {
    businessID: Number
  },

  created: function() {
    this.getBusiness();
  },

  methods: {
    getBusiness: function() {
      axios.get(`/api/business/id/${this.businessID}`).then(response => {
        this.business = response.data;
      });
    },
    editBusinessInfo: function(){
      this.editing = true;
    },
    
    cancelChanges: function(){
      this.editing = false;
      this.newAddress = "";
      this.newPhone = "";
    },
    saveChanges: function(){
      let req = {};
      if (this.newAddress){
        req.address = this.newAddress;
      }
      if (this.newPhone){
        req.phone = this.newPhone;
      }
      axios.put(`/api/business/id/${this.businessID}`, req).then( () => {
        this.newAddress = "";
        this.newPhone = "";
        this.editing = false;
        this.getBusiness();
      }).catch(err => {eventBus.$emit("update-business-error", err);})
    }
  }
};
</script>