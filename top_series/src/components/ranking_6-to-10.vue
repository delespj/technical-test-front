<template>
  <v-container>
      <v-row no-gutters>
          <v-col cols="12" sm="12">
              <v-card class="mb-2" v-for="serie in series" :key="serie.rank">
                  <v-layout row align-center>
                      <v-col cols="2" class="ml-3" >
                          <v-img height="40" width="40" src="@/assets/language-24px.svg"></v-img>
                          <p class="rank pa-0 ma-0">{{serie.rank}}<sup>{{serie.letter}}</sup></p>
                      </v-col>
                      <v-divider class="mt-0" inset vertical></v-divider>
                      <v-col cols="6" class="pa-0" >
                        <v-card-title class="pa-0  ml-1 seriesName">
                            <b class="pr-2">#</b> {{serie.title}}
                        </v-card-title>
                      </v-col>
                  </v-layout>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Ranking1To5',
  data () {
    return {
      series: [
        { title: 'Game of thrones', rank: 6, letter: 'th' },
        { title: 'Westworld', rank: 7, letter: 'th' },
        { title: 'The witcher', rank: 8, letter: 'th' },
        { title: 'Mandalorian', rank: 9, letter: 'th' },
        { title: 'House of cards', rank: 10, letter: '' }
      ]
    }
  }
}
</script>

<style scoped>
.rank{
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    font-size: 25px!important;
}

.seriesName{
    font-family: 'Open Sans', sans-serif;
    font-size: 25px!important;
    letter-spacing: 0;
    color: black;
}
</style>
