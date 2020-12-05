<template>
  <div id="user-settings">
    <b-container v-if="isSignedIn" class="signedin-container">
      <b-row align-h="center">
        <b-card>
          <SignOut />
        </b-card>
      </b-row>
      <b-row align-h="center">
        <b-card>
          <ChangePassword />
        </b-card>
      </b-row>
    </b-container>

    <b-container v-else class="signedup-container">
      <b-row align-h="center">
        <b-card>
          <SignIn />
        </b-card>
      </b-row>

      <b-row align-h="center">
        <b-card>
          <UserSignUp />
        </b-card>
      </b-row>
      <b-row align-h="center">
        <b-card>
          <b-button v-on:click="businessLink"
            >Create A Business Account</b-button
          >
        </b-card>
      </b-row>
    </b-container>

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
import UserSignUp from "./UserSignUp.vue";
import ChangePassword from "./ChangePassword.vue";
import { eventBus } from "../main";
export default {
  name: "UserSettings",
  components: {
    SignIn,
    SignOut,
    UserSignUp,
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
    businessLink: function () {
      this.$router.push("/businesssignup");
    },
  },
};
</script>
<style scoped>
</style>