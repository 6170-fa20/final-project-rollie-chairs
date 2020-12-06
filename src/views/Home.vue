<template>
  <div class='home'>
    <NavBar/>
    <b-container>
      <b-row>
        <b-col cols="3" class="filter-panel">
          <FilterPanel/>
        </b-col>
        <b-col>
          <BusinessContainer v-bind:search="query"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import BusinessContainer from "../components/BusinessContainer.vue"
import FilterPanel from "../components/FilterPanel.vue"
export default {
  name: "Home",
  components:{
    NavBar,
    BusinessContainer,
    FilterPanel
  },
  props:{
    query: String
  }
};
</script>