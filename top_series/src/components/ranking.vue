<template>
  <v-container class="mx-auto">
    <v-card
      class="mx-auto backgroundEdit"
      max-width="375"
      flat
      tile
      color="#dcdfe2"
    >
      <div class="text-center">
        <v-btn
          class="btnEdit mx-2 mt-5 mb-2"
          outlined
          :class="{ btnFocus: onFocus == false }"
          >1 to 5
        </v-btn>
        <v-btn
          class="btnEdit mx-2 mt-5 mb-2"
          outlined
          :class="{ btnFocus: onFocus == true }"
          >6 to 10
        </v-btn>
      </div>

      <v-list-item v-for="(serie, i) in listItems" :key="i">
        <v-list-item-content>
          <div class="cardEdit">
            <v-row no-gutters>
              <v-col cols="2" class="ml-2 mt-5">
                <v-icon class="icon mx-1" dark large>fas fa-globe</v-icon>
                <div class="d-flex">
                  <span
                    v-html="serie.number"
                    class="textEdit numberEdit"
                  ></span>
                  <span v-html="serie.rank" class="textEdit rankEdit"></span>
                </div>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <div class="d-flex mt-9">
                  <span class="mx-2 textEdit signEdit">#</span>
                  <span v-html="serie.title" class="textEdit titleEdit"></span>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-row no-gutters justify="center">
      <v-col cols="1">
        <v-icon class="mt-2 mr-12">home</v-icon>
      </v-col>
      <v-col cols="1">
        <v-pagination
          class="paginationEdit"
          v-model="currentPage"
          :length="Math.ceil(series.length / perPage)"
          prev-icon="mdi-chevron-left"
          next-icon="mdi-chevron-right"
          @click.native="pageFocus($event)"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ranking",
  data: () => ({
    series: [
      {
        title: "Buffy The Vampire Slayer",
        number: "1",
        rank: "st"
      },
      {
        title: "The X-Files",
        number: "2",
        rank: "nd"
      },
      {
        title: "Brooklyn Nine-Nine",
        number: "3",
        rank: "rd"
      },
      {
        title: "The Good Place",
        number: "4",
        rank: "th"
      },
      {
        title: "Peaky Blinders",
        number: "5",
        rank: "th"
      },
      {
        title: "Breaking Bad",
        number: "6",
        rank: "th"
      },
      {
        title: "Stranger Things",
        number: "7",
        rank: "th"
      },
      {
        title: "The Witcher",
        number: "8",
        rank: "th"
      },
      {
        title: "South Park",
        number: "9",
        rank: "th"
      },
      {
        title: "Supernatural",
        number: "10",
        rank: ""
      }
    ],
    currentPage: 1,
    perPage: 5,
    count: 0,
    onFocus: false
  }),
  computed: {
    listItems() {
      return this.series.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    }
  },
  methods: {
    pageFocus() {
      this.onFocus = true;
    },
    outOfFocus() {
      this.onFocus = false;
    }
  }
};
</script>

<style>
.btnFocus {
  border: 1px #1565c0 solid !important;
  border-radius: 10px !important;
}

.btnEdit {
  border: 1px #8f9193 solid;
  border-radius: 10px !important;
  cursor: default !important;
  color: #8f9193 !important;
  font-family: "Open Sans", sans-serif !important;
  text-transform: lowercase !important;
}

.v-pagination__item,
.v-pagination__navigation {
  background-color: none !important;
  border: none !important;
  box-shadow: none !important;
}

.paginationEdit {
  outline: none !important;
  box-shadow: none !important;
}

.backgroundEdit {
  height: 885px;
}

.cardEdit {
  background-color: #fff;
  box-shadow: 0px 1px 6px #8f9193;
  height: 110px;
}

.theme--dark.v-icon {
  opacity: 1 !important;
}

.icon {
  font-size: 40px !important;
  color: #000 !important;
}

.textEdit {
  font-family: "Open Sans", sans-serif !important;
  color: #000 !important;
}

.numberEdit {
  font-size: 45px !important;
  font-weight: bold;
}

.rankEdit {
  font-size: 20px !important;
  font-weight: bold;
}

.titleEdit {
  font-size: 24px !important;
}

.signEdit {
  font-weight: bold;
  font-size: 27px !important;
}
</style>
