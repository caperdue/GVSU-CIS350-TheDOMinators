<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(value, key) in cryptos" :key="key" xs="12" md="6">
        <v-card dark class="card" >
            <div class="pt-10">
            <v-img src="@/assets/btc.png" aspect-ratio="3.75" contain></v-img>
            </div>

            <v-card-title primary-title>
              <span class="left"> {{ key }}</span>
              <v-spacer></v-spacer>
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
              <scroll-new :news="newsBTC" v-if="key=='BTC'" ></scroll-new>
              </div>
            </v-expand-transition>
          </v-card>


      </v-col>
    </v-row>



  </v-container>
</template>

<script>
import axios from "axios";
import scrollNew from "./ScrollNews.vue"
export default {
  name: "News",
  components: {
    scrollNew
  },
  data() {
    return {
      cryptos: [],
      newsBTC: [],
      newsETH: [],
      newsADA: [],
      show: false,
      axiosInstance:null
    };
  },
  methods: {
    async getCryptoCoin(){
      var api_url = await axios.get(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DOGE,SOL,ADA&tsyms=USD"
    );
    this.cryptos = api_url.data;
    
    },
    async getNewsBTC(){
      let response=await this.axiosInstance.get("/v1?tickers=BTC&items=50&token=jnkbfh0hyeatrj4ab6fjuzykfusyx1aehhsl2l7i")
      this.newsBTC=response.data.data
    },

  },
  created() {
    
    this.axiosInstance=axios.create({
      baseURL:"https://cryptonews-api.com/api"
    })
    // let todaysDate=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()-1}`
    this.getCryptoCoin()
    this.getNewsBTC()
    
  },
};
</script>

<style>
</style>
