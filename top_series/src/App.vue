<template>
  <v-app align="center">
    <v-content>
      <ranking>
      </ranking>
    </v-content>
  </v-app>
</template>

<script>
import Ranking from '@/components/ranking';

export default {
  name: 'App',
  components: {
    'ranking': Ranking
  },
  data: () => ({
    //
  }),
};
</script>