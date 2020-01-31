<template>
  <v-app align="center">
    <v-content>
      <Ranking1To5>
      </Ranking1To5>
      <Ranking5To10>
      </Ranking5To10>
    </v-content>
  </v-app>
</template>

<script>
import Ranking1To5 from '@/components/ranking_1-to-5';
import Ranking5To10 from '@/components/ranking_5-to-10';

export default {
  name: 'App',

  components: {
    Ranking1To5,
    Ranking5To10,
  },

  data: () => ({
    //
  }),
};
</script>
