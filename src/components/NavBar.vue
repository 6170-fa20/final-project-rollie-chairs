<template>
  <div class="nav-bar">

      <router-link to="/"> Scope </router-link>
      <div class="search-bar-container">
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


    <div class="links-container">
        <router-link to="/map" >
            <span>
              Map
            </span>
        </router-link>
      <div class = "link">
            <a href="https://www.cambridgema.gov/covid19" target="_blank">
        Cambridge COVID Resources
      </a>
        </div>
      <div class = "link">
            <span> My account /login </span>
        </div>
        <div>
            <router-link to="/businesssignup"> SignUp </router-link>
            </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "NavBar",
  data() {
    return {
      searchContent:"",
    };
  },
  methods:{
    search: function(){
      eventBus.$emit("search-success", this.searchContent);
      this.$router.push("/");
    }

  },
};
</script>
