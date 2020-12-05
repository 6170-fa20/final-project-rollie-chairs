<template>
  <div class="business-signup-page">
    <NavBar />
    <b-card title="Create a Business">
      <BusinessSignUpForm />
    </b-card>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import BusinessSignUpForm from "../components/BusinessSignUpForm.vue";
export default {
  name: "BusinessSignUp",
  components: {
    NavBar,
    BusinessSignUpForm,
  },

  data() {
    return {};
  },
};
</script>