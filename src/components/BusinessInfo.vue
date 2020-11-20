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
  props: {
    businessID: Number
  },

  created: function() {
    this.getBusiness();
  },

  methods: {
    getBusiness: function() {
      axios.get(`/api/business/${this.businessID}`).then(response => {
        this.business = response.data;
      });
    }
  }
};
</script>