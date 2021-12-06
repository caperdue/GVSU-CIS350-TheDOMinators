<template>
  <v-col class="pa-0 justify-center">
    <v-carousel v-model="model">
      <v-carousel-item>
        <v-card class="mt-3" color="#004E61AB" height="100%" tile>
          <v-row class="mb-15 fill-height" align="center" justify="center">
            <v-col cols="12" class="pt-15">
              <v-row class="justify-center">
                <v-badge color="black" content="TM"
                  ><v-img src="@/assets/cryptfo.png" width="375"></v-img
                ></v-badge>
              </v-row>
              <v-row class="ml-10 justify-center">
                <p style="font-family: 'Courier New';" class="font-weight-bold white--text">
                  Created By The Dom-inators<v-icon size="10"
                    >fas fa-copyright</v-icon
                  >
                </p>
              </v-row>
              <v-row class="justify-center pb-15">
                <v-img
                  src="@/assets/btc.png"
                  max-height="100"
                  max-width="100"
                />
                <v-img
                  src="@/assets/eth.png"
                  max-height="100"
                  max-width="100"
                />
                <v-img
                  src="@/assets/ltc.png"
                  max-height="100"
                  max-width="100"
                />
                <v-img
                  src="@/assets/doge.png"
                  max-height="100"
                  max-width="100"
                />
                <v-img
                  src="../assets/sol.png"
                  max-height="100"
                  max-width="100"
                />
                <v-img
                  src="../assets/cardano.png"
                  max-height="100"
                  max-width="100"
                />
              </v-row>
              <v-row class="justify-center"> </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-carousel-item>
      <v-carousel-item>
        <v-card color="#0045611F" height="100%" tile>
          <v-row class="justify-center mt-5 pt-5">
            <h1 style="font-family: 'Courier New'; font-size: 50px" size="300" class="white--text">
              MISSION
            </h1>
          </v-row>
          <v-row class="justify-center px-10">
            <p
              style="font-family: 'Courier New'; text-align: center; font-size: 30px"
              class="font-weight-thin white--text"
            >
              Cryptfo's objective is to help you navigate the latest
              cryptocurrency news and prices about popular cryptocurrencies that
              are actively being traded 24/7. We aim to give users the best
              experience when navigating through our site. Cryptfo was created
              with the purpose to make finding cryptocurrency information easy
              for everyone.
            </p>
          </v-row>
        </v-card>
      </v-carousel-item>
      <v-carousel-item>
       <v-card color="#0045611F" height="100%" tile>
          <v-row class="justify-center mt-5 pt-5">
            <h1 style="font-family: 'Courier New'; font-size: 50px" size="300" class="white--text">
              What is cryptocurrency?
            </h1>
          </v-row>
          <v-row class="justify-center px-10">
            <p
              style="font-family: 'Courier New'; text-align: center; font-size: 25px"
              class="font-weight-thin white--text"
            >
              "A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation."
            </p>
          </v-row>
            <p
              style="font-family: 'Courier New'; text-align: center; font-size: 20px"
              class="font-weight-thin white--text"
            >
             https://www.investopedia.com/terms/c/cryptocurrency.asp
            </p>
        </v-card>
      </v-carousel-item>
    </v-carousel>
    <v-col>
      <v-divider horizontal></v-divider>
    </v-col>
    <div
    class="creators pa-15 mx-15">
      <h2 style="font-family:'Courier New';" class="white--text pb-5">Meet the developers</h2>
      <div v-for="(dev, i) in devs" :key="i">
      <v-card
      :color="dev.color"
      class="mb-5"
      shaped>
          <v-row >
            <v-col cols="4">

              <div class="ml-5" style="color:White;">
                <h2>{{dev.name}}</h2>
                <h5 style="color:lightGray;">{{dev.location}}</h5>
              </div>
            
                <v-avatar
                  class="profile ml-10"
                  size="275">
                  <v-img
                  :alt="dev.name" :src="dev.img"></v-img>
                </v-avatar>

            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
                <div class="pb-2" style="color: white; font-size: 20px;">
                  <h1>About me </h1>
                    <p>{{dev.desc}}
                    </p>
                </div>
            </v-col>
          </v-row>
      </v-card>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      image: "@/assets/cryptfo.png",
      model: 0,
      devs: [
        {name: 'Carly Perdue', img: require("../assets/perdue.jpg"), desc: '', color: "teal", location:"Muskegon, MI"}, 
        {name: 'Priscila Ontiveros', img: require("../assets/ontiveros.png"), desc: "I have a big passion for coding, especially coding to help others. One of the aspects I love the most about coding is how it makes learning a lifestyle. I am a hard working passionate student with interests in back-end development. I have 2 years of experience with Java, 3 years with C and 6 months in Python and UNIX. I am ready to grow and learn as a software developer! ", color: "purple", location:"Grand Rapids, MI"},
        {name: 'Devin Merchant', img: require("../assets/merchant.jpg"), desc: '', color: "orange", location: ""},
        {name: 'Dayaseh Johnson', img: '', desc: '', color: "green", location: ""}
      ],
  }
  }
  }
</script>
<style scoped>
* {
  font-family: 'Courier New';
}
</style>