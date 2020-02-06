<template>
    <v-container>
        <v-btn outlined height="45" width="100" 
            active-class="/ranking_1-to-5" class="ma-3 rankingButton" 
            router v-bind:to="'/ranking_1-to-5'">
            1 to 5
        </v-btn>
        <v-btn outlined height="45" width="100" 
            active-class="/ranking_6-to-10" class="ma-3 rankingButton" 
            router v-bind:to="'/ranking_6-to-10'">
            6 to 10
        </v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'ButtonsRanking'
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

.v-btn--active{
    color: #1565C0!important;
    border: 1px solid #1565C0;
    opacity: 100%;
    background-color: #E0E0E0!important; 
}
.v-btn--active::before{
    opacity: 0!important;
}
</style>
