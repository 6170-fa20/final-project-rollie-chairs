<template>
  <div class="nav-bar">
    <router-link
      to="/"
      id="homelink"
      v-bind:style="[
        'Home' === currentPath
          ? { 'text-decoration': 'underline' }
          : { 'text-decoration': 'none' },
      ]"
    >
      Scope
    </router-link>
    <div class="search-bar-container">
      <form id="search-bar" v-on:submit.prevent="search" method="post">
        <input
          id="search-content"
          v-model.trim="searchContent"
          type="text"
          name="searchContent"
          placeholder="Search for Business"
        />
        <!--
          <input
            type="submit"
            value="search"
            id="searchButton"
            class="button"
          />-->
        <b-button>Search</b-button>
      </form>
    </div>

    <div class="links-container">
      <router-link
        to="/map"
        v-bind:style="[
          'Map' === currentPath
            ? { 'text-decoration': 'underline' }
            : { 'text-decoration': 'none' },
        ]"
      >
        <span> Map </span>
      </router-link>

      <div class="link">
        <a
          href="https://www.cambridgema.gov/covid19"
          target="_blank"
          style="text-decoration: none"
        >
          Cambridge COVID Resources
        </a>
      </div>
      <div v-if="currentBusinessUser !== ''" class="form-container">
        My Account
        <!--
        <router-link :to="getBusinessLink()">
        My Account
      </router-link>
        -->
      </div>

      <div v-else></div>

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
    </div>
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
      currentBusinessUser: 1, //this.$cookie.get('scope-auth')
    };
  },
  methods: {
    search: function () {
      eventBus.$emit("search-success", this.searchContent);
      this.$router.push("/");
    },
  },
  created: function () {
    eventBus.$on("signin-success", (res) => {
      this.currentBusinessUser = res.userID;
    });
  },
  getBusinessLink: function () {
    return "/businesses/" + this.currentBusinessUser;
  },
};
</script>
