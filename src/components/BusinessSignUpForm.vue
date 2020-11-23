<template>
  <div >
    <form
      id="sign-up"
      class="component"
      v-on:submit.prevent="signUp"
      method="post"
    >
      <label for="companyName">Company Name:</label>
      <input
        id="companyName"
        v-model.trim="companyName"
        type="text"
        name="companyName"
        placeholder="Company name"
      />
      <label for="password">Password:</label>
      <input
        id="password"
        v-model.trim="password"
        type="text"
        name="password"
        placeholder="Password"
      />
      <label for="description">Description:</label>
      <input
        id="description"
        v-model.trim="description"
        type="text"
        name="description"
        placeholder="Description"
      />
      <label for="status">Choose a Status:</label>

      <select name="status" id="status" v-model.trim="status"
        type="text">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <label for="email">Email:</label>
      <input
        id="email"
        v-model.trim="email"
        type="text"
        name="email"
        placeholder="Email"
      />
      <label for="phone">Phone:</label>
      <input
        id="phone"
        v-model.trim="phone"
        type="text"
        name="phone"
        placeholder="Phone"
      />
       <label for="businessType">Choose a Business Type:</label>

      <select name="businessType" id="businessType" v-model.trim="businessType"
        type="text">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <input type="submit" value="Submit" class="button" />
    </form>
    <div v-if="errors.length" class="error-message" style="width: 250px">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessSignUpForm",

  data() {
    return {
      companyName: "",
      password: "",
      description: "",
      email: "",
      phone: "",
      status:"",
      businessType:"",
      errors: [],
    };
  },
};
</script>