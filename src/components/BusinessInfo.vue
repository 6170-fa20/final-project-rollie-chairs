<template>
  <div class="business-profile-info">
    <div class="business-name"> 
      <p>{{ business.name}} Safety Rating: INSERT RATING HERE </p>
    </div>
    <div class="business-profile-info">
      <p> Business Type: {{business.type}} </p>
      <p> Status: {{business.status}} </p>
      <p> Address: {{business.address}} </p>
      <p> Phone: {{business.phone}} </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BusinessProfile",
  data() {
    return {
      business: Object
    };
  },
  mounted: function() {
    this.getAllBusinesses();
  },

  methods: {
    getAllBusinesses: function() {
      axios.get(`/api/business/`).then(response => {
        this.business = response.data[0];
        this.view = {type:"all"};
      });
    }
  }
};
</script>