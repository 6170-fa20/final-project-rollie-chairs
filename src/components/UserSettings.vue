<template>
  <div id="user-settings">
    <b-card title="Settings" align-h="center" style="text-align:center">
      
   
    <b-container v-if="isSignedIn" class="signedin-container">
      <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{messages}}</p>
      
    </b-alert>
      <b-row align-h="center" style="padding-bottom: 20px;">
        
          <SignOut />
       
      </b-row>
      <b-row align-h="center" style="padding-bottom: 20px;">
        
          <ChangePassword />
        
      </b-row>
    </b-container>

    <b-container v-else class="signedup-container">
      <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{messages}}</p>
      
    </b-alert>
      <b-row align-h="center" style="padding-bottom: 20px;">
        
          <SignIn />
        
      </b-row>

      <b-row align-h="center" style="padding-bottom: 20px;">
        
          <b-button v-on:click="userLink"
            >Create A User Account</b-button
          >
        
      </b-row>
      <b-row align-h="center" style="padding-bottom: 20px;">
        
          <b-button v-on:click="businessLink"
            >Create A Business Account</b-button
          >
        
      </b-row>
    </b-container>
 </b-card>
    
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
      messages: "",
      dismissSecs: 5,
      dismissCountDown: 0,
      errorDismissCountDown:0,
    };
  },
  created: function () {
    let authenticated = this.$cookie.get("scope-auth") || this.$cookie.get("business-auth");
    if (authenticated) {
      this.isSignedIn = true;
    }
    eventBus.$on("signin-success", (userObject) => {
      
      this.$cookie.set("scope-auth", userObject.id);
      this.$cookie.set("business-auth", userObject.businessID);
      //console.log(this.$cookie.get("scope-auth"));
      this.isSignedIn = true;
      this.messages="You have been signed in!";
      this.showSuccessAlert();
      
    });

    eventBus.$on("signout-success", () => {
      this.$cookie.set("scope-auth", "");
      this.$cookie.set("business-auth", "");
      this.isSignedIn = false;
      this.messages="You have been signed out!";
      this.showSuccessAlert();
    });
    eventBus.$on("signup-success", () => {
      this.messages="You have been signed up! Sign in to continue.";
      this.showSuccessAlert();
    });
    eventBus.$on("password-change-success", () => {
      this.messages="Your password has been changed";
      this.showSuccessAlert();
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
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    showSuccessAlert() {
        this.dismissCountDown = this.dismissSecs
      },
      showErrorAlert() {
        this.errorDismissCountDown = this.dismissSecs
      },
      errorCountDownChanged(errorDismissCountDown) {
        this.errorDismissCountDown = errorDismissCountDown
      },
  },
};
</script>
<style scoped>
b-row{
    padding-bottom: 50px;
}
</style>