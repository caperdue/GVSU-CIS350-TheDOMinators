<template>
  <div class="crypto-container">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md6 lg4 v-for="(value, key) in cryptos" :key="{ key }">
          <v-card
          max-width="600"
          class="card"
          >
            <v-img
              src="https://picsum.photos/1920/1080?randomg"
              aspect-ratio="3.75"
            ></v-img>

            <v-card-title primary-title>
              <span class="left"> {{ key }}  </span>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>


            <v-card-actions>
              <v-btn color="#32c8c5" text> Learn More </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis, at aliquid! Consequatur maiores, totam quam,
                  dolorem aut eligendi non eum itaque assumenda saepe iure ab
                  nostrum voluptatem neque beatae doloremque. Facilis atque
                  officia adipisci, nostrum, obcaecati facere beatae praesentium
                  vitae voluptatum asperiores autem cum. Nesciunt tempore quo
                  nostrum accusantium laboriosam! Soluta suscipit illo quas!
                  Iusto deserunt assumenda totam cum vero. 
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  el: "#app",
  name: "prices",
  data: () => ({
    cryptos: [],
    time: 1000,
    show: false,
  }),

  async created() {
    const api_url = await axios.get(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DOGE,SOL,ADA&tsyms=USD"
    );
    this.cryptos = api_url.data;
  },
};
</script>


<style>

.crypto-container {
  overflow: auto;
}
.card {
  margin: auto;
  margin: 0px 20px 20px 20px;
}

.right {

}


</style>
