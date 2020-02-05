<template>
  <v-app align="center">
    <v-content class="grey lighten-2">
      <buttonsRankingSeries>
      </buttonsRankingSeries>
    </v-content>
  </v-app>
</template>
<script>
import buttonsRankingSeries from '@/components/buttons';

export default {
  name: 'App',
  components: {
    buttonsRankingSeries
  },

  data: () => ({
    //
  }),
};
</script>

