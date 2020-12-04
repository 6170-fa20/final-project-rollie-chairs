<template>
  <div>
    <NavBar/>
    <UserSettings/>
  </div>
</template>

<script>
import UserSettings from "../components/UserSettings.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "Settings",
  components: {
    UserSettings,
    NavBar
  }
};
</script>