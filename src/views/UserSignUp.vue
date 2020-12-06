<template>
  <div class="user-signup-page">
    <NavBar />
    <b-card title="Create A User Account" align-h="center">
      <UserSignUpForm/>
    </b-card>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import UserSignUpForm from "../components/UserSignUpForm.vue";
export default {
  name: "UserSignUp",
  components: {
    NavBar,
    UserSignUpForm,
  },

  data() {
    return {};
  },
};
</script>