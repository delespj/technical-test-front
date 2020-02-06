<template>
  <v-container class="dashboard ma-5">
    <h1 class="grey--text">Home</h1>
    <h2 class="grey--text">Welcome to H2O's technical test. </h2>
    <p>The objective of this test is to reproduce the following model :</p>
    <v-layout row class="ma-5" >
      <v-flex xs12 md6>
        <v-img width="70%" src="@/assets/model1.png"></v-img>
      </v-flex>
      <v-flex xs12 md6>
        <v-img width="70%" src="@/assets/model2.png"></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
    data () {
    return {
      series: [
        { title: 'Doctor Who', rank: 1, letter: 'st' },
        { title: 'Vikings', rank: 2, letter: 'nd' },
        { title: 'Black mirror', rank: 3, letter: 'rd' },
        { title: 'Peaky blinders', rank: 4, letter: 'th' },
        { title: 'Sherlock', rank: 5, letter: 'th' },
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