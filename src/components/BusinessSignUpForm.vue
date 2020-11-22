<template>
  <div class='business-signup-form'>
    <form id="sign-up" class='component' v-on:submit.prevent="signUp" method="post">
      <input id='companyName' v-model.trim='companyName' type='text' name='companyName' placeholder="Company name">
      <input id='password' v-model.trim='password' type='text' name='password' placeholder="Password">
      <input id='description' v-model.trim='description' type='text' name='description' placeholder="Description">
      <input id='email' v-model.trim='email' type='text' name='email' placeholder="Email">
      <input id='phone' v-model.trim='phone' type='text' name='phone' placeholder="Phone">
      <input type='submit' value='Submit' class="button">
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

export default {
  name: "BusinessSignUpForm",
  

  data() {
    return {
        companyName:"",
        password:"",
        description:"",
        email:"",
        phone:"",
        errors:[],
        
     
    }
  },
};
</script>