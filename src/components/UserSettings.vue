<template>
  <div id="user-settings">
    <router-link to="/businesssignup" > Create A Business Account </router-link>
    <!--
    <div v-if="isSignedIn" class="form-container">
      <SignOut/>
    </div>
    <div v-else class="form-container">
      <SignIn/>
      <UserSignUp/>
      <router-link to="/businesssignup" > Create A Business Account </router-link>
    </div>-->
    <SignIn/>
    <UserSignUp/>
    <SignOut/>

    <div v-if='messages.length' class="success-message" style="text-align:center;">
      <div v-for='message in messages' v-bind:key='message.id'>{{ message }}</div>
    </div>
  </div>
</template>

<script>
import SignIn from "./SignIn.vue";
import SignOut from "./SignOut.vue";
import UserSignUp from "./UserSignUp.vue";
import { eventBus } from "../main";
export default {
  name: "UserSettings",
  components: {
    SignIn,
    SignOut,
    UserSignUp
  },
  data() {
    return {
      isSignedIn: false,
      messages: []
    };
  },
  created: function() {
    let authenticated = this.$cookie.get('scope-auth');
    if (authenticated) {
      this.isSignedIn = true;
    }
    eventBus.$on("signin-success", (userName) => {
      this.$cookie.set('scope-auth', userName);
      this.isSignedIn = true;
      this.messages.push("You have been signed in!");
      this.clearMessages();
    });
    
    eventBus.$on("signout-success", () => {
      this.$cookie.set('scope-auth', '');
      this.isSignedIn = false;
      this.messages.push("You have been signed out!");
      this.clearMessages();
    });
    eventBus.$on("signup-success", () => {
      this.messages.push("You have been signed up! Sign in to continue.");
      this.clearMessages();
    });
  },
  methods: {
    clearMessages: function() {
      setInterval(() => {
        this.messages = [];
      }, 5000);
    }
  }
};
</script>