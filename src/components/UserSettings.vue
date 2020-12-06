<template>
  <div id="user-settings">
    <b-card>
    <b-container v-if="isSignedIn" class="signedin-container">
      <b-row align-h="center">
        
          <SignOut />
       
      </b-row>
      <b-row align-h="center">
        
          <ChangePassword />
        
      </b-row>
    </b-container>

    <b-container v-else class="signedup-container">
      <b-row align-h="center">
        
          <SignIn />
        
      </b-row>

      <b-row align-h="center">
        
          <b-button v-on:click="userLink"
            >Create A User Account</b-button
          >
        
      </b-row>
      <b-row align-h="center">
        
          <b-button v-on:click="businessLink"
            >Create A Business Account</b-button
          >
        
      </b-row>
    </b-container>
 </b-card>
    <div
      v-if="messages.length"
      class="success-message"
      style="text-align: center"
    >
      <div v-for="message in messages" v-bind:key="message.id">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from "./SignIn.vue";
import SignOut from "./SignOut.vue";

import ChangePassword from "./ChangePassword.vue";
import { eventBus } from "../main";
export default {
  name: "UserSettings",
  components: {
    SignIn,
    SignOut,
    
    ChangePassword,
  },
  data() {
    return {
      isSignedIn: false,
      messages: [],
    };
  },
  created: function () {
    let authenticated = this.$cookie.get("scope-auth");
    if (authenticated) {
      this.isSignedIn = true;
    }
    eventBus.$on("signin-success", (userInfo) => {
      this.$cookie.set("scope-auth", userInfo);
      this.isSignedIn = true;
      this.messages.push("You have been signed in!");
      this.clearMessages();
    });

    eventBus.$on("signout-success", () => {
      this.$cookie.set("scope-auth", "");
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
    clearMessages: function () {
      setInterval(() => {
        this.messages = [];
      }, 5000);
    },
    userLink: function(){
      this.$router.push("/usersignup");
    },
    businessLink: function () {
      this.$router.push("/businesssignup");
    },
  },
};
</script>
<style scoped>
</style>