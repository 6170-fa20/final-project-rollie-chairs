<template>
  <div class="business-profile-info">
    start
    <div class="business-name"> 
      <p>{{ business.name}} Safety Rating: INSERT RATING HERE </p>
    </div>

    <div>
      <p> Business Type: {{business.type}} </p>
      <p> Status: {{business.status}} </p>
      <p> Phone: {{business.phone}} </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { eventBus } from "../main";

export default {
  name: "BusinessListing",
  data() {
    return {
      business: Object,
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
  }
};
</script>