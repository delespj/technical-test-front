<template>
  <v-container class="home ma-5">
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
}
</script>