<template>
  <div class="user-signup-page">
    <NavBar />
    <b-container>
      <b-row align-h="center">
    <b-card title="Create A User Account" >
      <UserSignUpForm/>
    </b-card>
      </b-row>
    </b-container>
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