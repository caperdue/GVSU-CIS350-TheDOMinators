<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(value, key) in cryptos" :key="key" sm="12" md="6">
        <v-card dark class="card" v-if="key=='BTC'" >
            <div class="pt-10">
            <v-img src="@/assets/btc.png" aspect-ratio="3.75" contain></v-img>
            </div>

            <v-card-title primary-title>
              <span class="left"> {{ key }}</span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" text> Scroll for News! </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show1 = !show1">
                <v-icon>{{
                  show1 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show1" >
                <v-divider></v-divider>
              <scroll-new :news="newsBTC"  ></scroll-new>
              </div>
            </v-expand-transition>
        </v-card>

        <v-card dark class="card" v-if="key=='ETH'" >
            <div class="pt-10">
            <v-img src="@/assets/eth.png" aspect-ratio="3.75" contain></v-img>
            </div>

            <v-card-title primary-title>
              <span class="left"> {{ key }}</span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" @click="show2 = !show2" text> Scroll for News! </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show2 = !show2">
                <v-icon>{{
                  show2 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show2" >
                <v-divider></v-divider>
              <scroll-new :news="newsETH"  ></scroll-new>
              </div>
            </v-expand-transition>
        </v-card>

        <v-card dark class="card" v-if="key=='LTC'" >
            <div class="pt-10">
            <v-img src="@/assets/ltc.png" aspect-ratio="3.75" contain></v-img>
            </div>

            <v-card-title primary-title>
              <span class="left"> {{ key }}</span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" text> Scroll for News! </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show3 = !show3">
                <v-icon>{{
                  show3 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show3" >
                <v-divider></v-divider>
              <scroll-new :news="newsLTC"  ></scroll-new>
              </div>
            </v-expand-transition>
        </v-card>

        <v-card dark class="card" v-if="key=='DOGE'" >
            <div class="pt-10">
            <v-img src="@/assets/doge.png" aspect-ratio="3.75" contain></v-img>
            </div>

            <v-card-title primary-title>
              <span class="left"> {{ key }}</span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" text> Scroll for News! </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show4 = !show4">
                <v-icon>{{
                  show4 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show4" >
                <v-divider></v-divider>
              <scroll-new :news="newsDOGE"  ></scroll-new>
              </div>
            </v-expand-transition>
        </v-card>

        <v-card dark class="card" v-if="key=='SOL'" >
            <div class="pt-10">
            <v-img src="@/assets/sol.png" aspect-ratio="3.75" contain></v-img>
            </div>

            <v-card-title primary-title>
              <span class="left"> {{ key }}</span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" text> Scroll for News! </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show5 = !show5">
                <v-icon>{{
                  show5 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show5" >
                <v-divider></v-divider>
              <scroll-new :news="newsSOL"  ></scroll-new>
              </div>
            </v-expand-transition>
        </v-card>

        <v-card dark class="card" v-if="key=='ADA'" >
            <div class="pt-10">
            <v-img src="@/assets/cardano.png" aspect-ratio="3.75" contain></v-img>
            </div>

            <v-card-title primary-title>
              <span class="left"> {{ key }}</span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" text> Scroll for News! </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show6 = !show6">
                <v-icon>{{
                  show6 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show6" >
                <v-divider></v-divider>
              <scroll-new :news="newsADA"  ></scroll-new>
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
      newsLTC: [],
      newsADA: [],
      newsDOGE: [],
      newsSOL:[],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
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
      let response=await this.axiosInstance.get("/v1?tickers=BTC&items=50&token=lxdkon1zqnimjdvweaukwedl8ekbxpoaqpiuvicl")
      this.newsBTC=response.data.data
    },
    async getNewsETH(){
      let response=await this.axiosInstance.get("/v1?tickers=ETH&items=50&token=lxdkon1zqnimjdvweaukwedl8ekbxpoaqpiuvicl")
      this.newsETH=response.data.data
    },
    async getNewsLTC(){
      let response=await this.axiosInstance.get("/v1?tickers=LTC&items=50&token=lxdkon1zqnimjdvweaukwedl8ekbxpoaqpiuvicl")
      this.newsLTC=response.data.data
    },
    async getNewsDOGE(){
      let response=await this.axiosInstance.get("/v1?tickers=DOGE&items=50&token=lxdkon1zqnimjdvweaukwedl8ekbxpoaqpiuvicl")
      this.newsDOGE=response.data.data
    },
    async getNewsSOL(){
      let response=await this.axiosInstance.get("/v1?tickers=SOL&items=50&token=lxdkon1zqnimjdvweaukwedl8ekbxpoaqpiuvicl")
      this.newsSOL=response.data.data
    },
    async getNewsADA(){
      let response=await this.axiosInstance.get("/v1?tickers=ADA&items=50&token=lxdkon1zqnimjdvweaukwedl8ekbxpoaqpiuvicl")
      this.newsADA=response.data.data
    }
  },
  created() {
    
    this.axiosInstance=axios.create({
      baseURL:"https://cryptonews-api.com/api"
    })
    // let todaysDate=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()-1}`
    this.getCryptoCoin()
    this.getNewsBTC()
    this.getNewsETH()
    this.getNewsLTC()
    this.getNewsDOGE()
    this.getNewsSOL()
    this.getNewsADA()
    
  },
};
</script>

<style>
</style>