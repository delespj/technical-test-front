<template>
  <v-app align="center">
    <v-content class="grey lighten-2">

      <div v-if="display">

        <v-btn class="mx-1 mt-4 px-2 text-lowercase body-1" @click='display = true' small outlined height="28" color="#1d67bd">1 to 5</v-btn>
        <v-btn class="mx-1 mt-4 px-1 text-lowercase body-1" @click='display = false' small outlined height="28" color="#8f9193">6 to 10</v-btn>

        <Ranking1To5>
        </Ranking1To5>

      </div>

      <div v-else>
        <v-btn class="mx-1 mt-4 px-2 text-lowercase body-1" @click='display = true' small outlined height="28" color="#8f9193">1 to 5</v-btn>
        <v-btn class="mx-1 mt-4 px-1 text-lowercase body-1" @click='display = false' small outlined height="28" color="#1d67bd">6 to 10</v-btn>

        <Ranking6To10>
        </Ranking6To10>

      </div>

    </v-content>
  </v-app>
</template>

<script>
  import Ranking1To5 from '@/components/ranking_1-to-5';
  import Ranking6To10 from '@/components/ranking_6-to-10';

  export default {
    name: 'App',

    components: {
      Ranking1To5,
      Ranking6To10,
    },

    data: () => ({
      display: true,
    }),

  };
</script>
