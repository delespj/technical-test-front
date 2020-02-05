<template>
    <v-container>
        <v-btn outlined height="45" width="100" v-bind:class="{ active: series1to5 }" class="ma-3 rankingButton" @click="displaySeries1To5">1 to 5</v-btn>
        <v-btn outlined height="45" width="100" v-bind:class="{ active: series6to10 }" class="ma-3 rankingButton" @click="displaySeries6To10">6 to 10</v-btn>
        
        <div v-if=series1to5>
            <Ranking1To5></Ranking1To5>
        </div>

        <div v-if=series6to10>
            <Ranking6To10></Ranking6To10>
        </div>
    </v-container>
</template>

<script>
import Ranking1To5 from '@/components/ranking_1-to-5';
import Ranking6To10 from '@/components/ranking_6-to-10';

export default {
    name: 'ButtonsRanking',
    components: {
        Ranking1To5,
        Ranking6To10
    },
    data () {
        return {
            series1to5: true,
            series6to10: false, 
        }
    },
    methods: {
      displaySeries1To5 () {
        if (this.series1to5 == false) {
          this.series1to5 = true;
          this.series6to10 = false;        
        }
      },
      displaySeries6To10 () {
        if (this.series6to10 == false) {
            this.series1to5 = false;
            this.series6to10 = true;
        }
      }
    }
}
</script>

<style scoped>
.rankingButton{
   font-family: 'Open Sans', sans-serif;
   font-size: 25px!important;
   border-radius: 10px;
   border: 1px solid black;
   letter-spacing: 0;
   opacity: 35%;
}

.active{
    color: #1565C0!important;
    border: 1px solid #1565C0;
    opacity: 100%;
}
</style>
