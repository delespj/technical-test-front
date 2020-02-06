<template>
  <div class="ListSeries ma-5">
    <buttons></buttons> 
    <h1 class="grey--text">List Of Series</h1>
    <v-container>
      <v-layout row class="mb-3 ml-1">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-filmstrip</v-icon>
              <span class="caption text-lowercase">By series name</span>
            </v-btn>
          </template>
          <span>Sort series by name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('rank')" v-on="on">
              <v-icon left small>mdi-rocket</v-icon>
              <span class="caption text-lowercase">By rank</span>
            </v-btn>
          </template>
          <span>Sort series by rank</span>
        </v-tooltip>
      </v-layout>

      <v-card flat :class="`ma-2 pa-5 serie ${getColor(serie.rank)}`" v-for="serie in series" :key="serie.title">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Serie's name</div>
            <div>{{serie.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Personal rank</div>
            <div>{{serie.rank}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="justify-end">
            <div class="text-right">
              <v-chip :class="`v-chip white--text caption my-2 ${getChipBGColor (serie.rank)}`">{{serie.rank}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import buttons from '@/components/buttons'
export default {
  component: buttons,
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
  },
  methods: {
    sortBy (prop) {
      this.series.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    },
    getColor (rank) {
      if(rank < 4){
        return "greenColor";
      } else if (rank > 7) {
        return "redColor";
      } else {
        return "orangeColor";
      }
    },
    getChipBGColor (rank) {
      if(rank < 4){
        return "greenChip";
      } else if (rank > 7) {
        return "redChip";
      } else {
        return "orangeChip";
      }
    }
  }
}
</script>

<style scoped>
  .greenColor {
    border-left: 4px solid #3cd1c2;
  }
  .orangeColor {
    border-left: 4px solid orange;
  }
  .redColor {
    border-left: 4px solid tomato;
  }
  .greenChip {
    background-color: #3cd1c2!important;
  }
  .orangeChip {
    background-color: orange!important;
  }
  .redChip {
    background-color: tomato!important;
  }

</style>
