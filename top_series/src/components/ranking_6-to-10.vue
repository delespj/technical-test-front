<template>
    <v-row no-gutters>
        <v-col cols="12" sm="12">
            <v-card class="mx-auto elevation-0" max-width="250" tile >
                <v-list class="grey lighten-2" >
                    <v-list-item class="ma-2 ps-0 white elevation-1" v-for="(item, i) in items" :key="i" >

                        <v-col class="d-block pa-1 mx-1 my-0 font-weight-black" cols="2" sm="2" >

                            <v-icon class="d-block" color="#000">mdi-web</v-icon>

                            <v-list-item-title class="d-inline text-left headline font-weight-bold" v-text="i+6">
                            </v-list-item-title>

                            <v-list-item-title class="d-inline caption font-weight-black" v-text="item.adj" style="position: relative; bottom: 8px;">
                            </v-list-item-title>

                        </v-col>

                        <v-divider class="ms-0 me-1" vertical>
                        </v-divider>

                        <v-col class="d-inline px-0 text-left">

                            <v-list-item class="d-inline px-0 font-weight-black"> # </v-list-item>

                            <v-list-item-title class="d-inline px-0" v-text="item.text">
                            </v-list-item-title>

                        </v-col>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {

        name: 'Ranking6To10',

        data: () => ({
            item: 1,
            items: [
                { adj: 'th', text: 'Game of thrones' },
                { adj: 'th', text: 'Westworld' },
                { adj: 'th', text: 'The witcher' },
                { adj: 'th', text: 'Mandalorian' },
                { adj: '', text: 'House of cards' },
            ],
        }),

    }
</script>
