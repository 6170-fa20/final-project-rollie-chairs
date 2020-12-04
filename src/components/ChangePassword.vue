<template>
  <div>
    <form id="change-password" class='component' v-on:submit.prevent="changePassword" method="post">
      <input id='password' v-model.trim='password' type='text' name='password' placeholder="New Password">
      <input type='submit' value='Update Password' class="button">
    </form>
    <div v-if='errors.length' class="error-message" style="width: 250px;">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for='error in errors' v-bind:key='error.id'>{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "ChangePassword",
  data() {
    return {
      currentUser:"",
      newPassword:"",
      errors: [],
      success: "",
    };
  },
  methods:{
      changePassword:function(){

      }
  }
  
};
</script>