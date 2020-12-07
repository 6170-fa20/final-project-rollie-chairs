<template>
  <div class="nav-bar">
    <b-navbar type="light">
      <b-navbar-brand to="/">
        Scope
      </b-navbar-brand>

    <!--   <router-link to="/"  id="homelink" v-bind:style= "['Home'===currentPath ? {'text-decoration': 'underline'} : {'text-decoration': 'none'}]"> 
          Scope 
       </router-link> -->

      <b-nav-form v-on:submit.prevent="search" method="post">
        <b-form-input class="mr-sm-2" placeholder="Search for a business" v-model.trim="searchContent"></b-form-input>
        <b-button type="submit">Search</b-button>
      </b-nav-form>

    <!--   <div class="search-bar-container">
        <form id="search-bar" v-on:submit.prevent="search" method="post">
          <input
            id="search-content"
            v-model.trim="searchContent"
            type="text"
            name="searchContent"
            placeholder="Search for Business"
          />

          <input
            type="submit"
            value="search"
            id="searchButton"
            class="button"
          />
        </form>
      </div>
 -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/map">Map</b-nav-item>
        <div v-if="currentBusinessUser">
          <b-nav-item :to="getBusinessLink()">My Account</b-nav-item>
        </div>
        <b-nav-item to="/settings">Settings</b-nav-item>
        <b-nav-text>|</b-nav-text>
        <b-nav-item href="https://www.cambridgema.gov/covid19">Cambridge COVID Resources</b-nav-item>
      </b-navbar-nav>

     <!--  <div class="links-container">
      <router-link to="/map" v-bind:style= "['Map'===currentPath ? {'text-decoration': 'underline'} : {'text-decoration': 'none'}]">
          <span>
            Map
          </span>
      </router-link>
       
      <div class = "link">
        <a href="https://www.cambridgema.gov/covid19" target="_blank" style="text-decoration: none;">
          Cambridge COVID Resources
        </a>
      </div>
      <div v-if="currentBusinessUser" class="form-container">
      
        <router-link :to="getBusinessLink()">
          My Account
        </router-link>
        
      
      </div>
   

      <router-link
        to="/settings"
        v-bind:style="[
          'Settings' === currentPath
            ? { 'text-decoration': 'underline' }
            : { 'text-decoration': 'none' },
        ]"
      >
        <span> Settings </span>
      </router-link>
      </div> -->

    </b-navbar>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "NavBar",
  data() {
    return {
      searchContent: "",
      currentPath: this.$route.name,
      currentBusinessUser: 1//this.$cookie.get('scope-auth')
    };
  },
  methods: {
    search: function () {
      eventBus.$emit("search-success", this.searchContent);
      this.$router.push({ path: '/search', query: { name: this.searchContent }})
    },
    getBusinessLink: function() {
      return "/businesses/" + this.currentBusinessUser;
    }

  },
  created: function () {
    eventBus.$on("signin-success", (res) => {
      this.currentBusinessUser = res.userID;
    });
   },
    
};
</script>
