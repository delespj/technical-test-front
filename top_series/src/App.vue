<template>
  <v-app>
    <toolbar></toolbar>
      <v-content class="grey lighten-2">
        <router-view></router-view>
      </v-content>
  </v-app>
</template>
<script>
import toolbar from '@/components/toolbar';

export default {
  name: 'App',
  components: {
    toolbar
  },

  data: () => ({
    //
  }),
};
</script>

