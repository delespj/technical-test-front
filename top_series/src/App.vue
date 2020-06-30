<template>
  <v-app class="white" align="center">
    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.font {
  font-family: 'Open Sans', sans-serif; 
}

h1 {
  font-size : 35px;
}

h1 sup{
  font-size : 20px;
}

h2 {
  font-size : 25px;
}
</style>