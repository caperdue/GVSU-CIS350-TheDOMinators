<template>
  <div>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md6 lg4 v-for="(value, key) in cryptos" :key="value">
          <!-- BTC CARD -->
          <v-card dark max-width="600" class="card" v-if="key == 'BTC'">
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
                <v-card-text>
                  Bitcoin is a decentralized digital currency, without a central
                  administrator, that can be sent from user to user through
                  their network. Security and exchangeability between users are
                  the key advantages of Bitcoin.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>

          <!-- ETH CARD -->
          <v-card dark    max-width="600" class="card" v-if="key == 'ETH'">
             <div class="pt-10">
            <v-img class="mt-2" src="@/assets/eth.png" aspect-ratio="3.75" contain> </v-img>
             </div>
            <v-card-title primary-title>
              <span class="left"> {{ key }} </span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" text> Learn More </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show1 = !show1">
                <v-icon>{{
                  show1 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show1">
                <v-divider></v-divider>

                <v-card-text>
                  Ethereum, similar to Bitcoin, is an alternative,
                  decentralized, open-source blockchain with the advantage of
                  smart contract functionality. The smart contract functionality
                  allows Ethererum to self-administer buying and selling of
                  goods between individuals. This pertains to anything of value:
                  shares, money, real estate, and so on.</v-card-text
                >
              </div>
            </v-expand-transition>
          </v-card>

          <!-- LTC CARD -->
          <v-card dark    max-width="600" class="card" v-if="key == 'LTC'">
             <div class="pt-10">
            <v-img class="mt-2" src="@/assets/ltc.png" aspect-ratio="3.75" contain></v-img>
             </div>
            <v-card-title primary-title>
              <span class="left"> {{ key }} </span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" text> Learn More </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show2 = !show2">
                <v-icon>{{
                  show2 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show2">
                <v-divider></v-divider>

                <v-card-text>
                  Litecoin, another digital currency, has a alternative network
                  that doesn't only extend to no processing fees — it also
                  enables users to send coins much faster when compared to
                  Bitcoin's and Etherum's blockchain.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>

          <!-- DOGE CARD -->
          <v-card dark    max-width="600" class="card" v-if="key == 'DOGE'">
             <div class="pt-10">
            <v-img class="mt-2" src="@/assets/doge.png" aspect-ratio="3.75" contain></v-img>
             </div>
            <v-card-title primary-title>
              <span class="left"> {{ key }} </span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" text> Learn More </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show3 = !show3">
                <v-icon>{{
                  show3 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show3">
                <v-divider></v-divider>

                <v-card-text>
                  Dogecoin is a cryptocurrency that runs on blockchain
                  technology, similarly to Bitcoin and Ethereum. Despite being a
                  "meme-currency", Dogecoin is quicker and easier for
                  cryptocurrency miners to complete the mathematical equations
                  that complete and record transactions and purchases. This
                  allows energy-friendly transactions and because of this
                  reason, this coin is backed by Elon Musk.</v-card-text
                >
              </div>
            </v-expand-transition>
          </v-card>

          <!-- SOL CARD -->
          <v-card dark    max-width="600" class="card" v-if="key == 'SOL'">
             <div class="pt-10">
            <v-img class="mt-2" src="../assets/sol.png" aspect-ratio="3.75" contain></v-img>
             </div>
            <v-card-title primary-title>
              <span class="left"> {{ key }} </span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" text> Learn More </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show4 = !show4">
                <v-icon>{{
                  show4 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show4">
                <v-divider></v-divider>

                <v-card-text>
                  Solana is yet another decentralized currency. Solana aims to
                  improve blockchain scalability by using a combination of proof
                  of stake consensus and so-called proof of history, something
                  that Bitcoin and Ethereum lack.</v-card-text
                >
              </div>
            </v-expand-transition>
          </v-card>

          <!-- ADA CARD -->
          <v-card dark    max-width="600" class="card" v-if="key == 'ADA'">
             <div class="pt-10">
            <v-img class="mt-2"
              src="../assets/cardano.png"
              aspect-ratio="3.75"
              contain
            ></v-img>
             </div>

            <v-card-title primary-title>
              <span class="left"> {{ key }} </span>
              <v-spacer></v-spacer>
              <span class="right">${{ value.USD }}</span>
            </v-card-title>

            <v-card-actions>
              <v-btn color="#32c8c5" text> Learn More </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show5 = !show5">
                <v-icon>{{
                  show5 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show5">
                <v-divider></v-divider>

                <v-card-text>
                  Cardano is a public, blockchain cryptocurrency. It is
                  open-source and decentralized, with the new concept of proof
                  of stake, rather than proof of work. Proof of work, what
                  Bitcoin uses to manage the blockchain network, is less
                  energy-efficient because all the peers of the network have to
                  validate the transactions. Proof of stake allows Cardano to be
                  more energy-efficient by randomly selecting peers to maintain
                  their blockchain network.
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
  name: "prices",
  data: () => ({
    cryptos: [],
    show: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
  }),

  async created() {
    var api_url = await axios.get(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DOGE,SOL,ADA&tsyms=USD"
    );
    this.cryptos = api_url.data;
  },
};

</script>


<style>
.card {
  margin: auto;
  margin: 0px 20px 20px 20px;
}
</style>
