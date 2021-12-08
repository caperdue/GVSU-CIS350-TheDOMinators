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
                <p class="font-weight-bold">
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
            <h1 class="white--text">
              MISSION
            </h1>
          </v-row>
          <v-row class="justify-center mx-15">
            <p class="font-weight-thin white--text ">
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
            <h1>
              What is cryptocurrency?
            </h1>
          </v-row>
          <v-row class="justify-center mx-15">
            <p class="font-weight-thin">
              "A cryptocurrency is a digital or virtual currency that is secured
              by cryptography, which makes it nearly impossible to counterfeit
              or double-spend. Many cryptocurrencies are decentralized networks
              based on blockchain technology—a distributed ledger enforced by a
              disparate network of computers. A defining feature of
              cryptocurrencies is that they are generally not issued by any
              central authority, rendering them theoretically immune to
              government interference or manipulation."
            </p>
          </v-row>
          <p class="font-weight-thin white--text">
            https://www.investopedia.com/terms/c/cryptocurrency.asp
          </p>
        </v-card>
      </v-carousel-item>
    </v-carousel>
    <v-col>
      <v-divider horizontal></v-divider>
    </v-col>
    <v-col md="10" offset-md="1">
      <h2 style="font-family:'Courier New';" class="white--text pb-5">
        Meet the developers
      </h2>
      <div v-for="(dev, i) in devs" :key="i">
        <v-card :color="dev.color" class="mb-5" shaped>
          <v-row>
            <v-col md="4" class="justify-center">
              <div style="color:White; text-align:center;">
                <h2>{{ dev.name }}</h2>
                <h5 style="color:lightGray;">{{ dev.location }}</h5>
              <v-avatar style="justify-content: center;" size="200" class="tileprofile">
                <v-img
                  class="work-please"
                  :alt="dev.name"
                  :src="dev.img"
                  style="border-radius:10px;"
                ></v-img>
              </v-avatar>
              </div>
            </v-col>
            <v-divider vertical/>
            <v-col sm="12" md="8">
              <div class="">
                <h1 :class="condAlignment">About Me</h1>
                <p :class="condAlignment + ' about-me'">{{ dev.desc }}</p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-col>
  </v-col>
</template>

<script>
export default {
  computed: {
    condAlignment: function() {
     switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'text-center';
          case 'sm': return 'text-center';
          default: return 'text-left';
        }
    }
  },
  data() {
    return {
      image: "@/assets/cryptfo.png",
      model: 0,
      devs: [
        {
          name: "Carly Perdue",
          img: require("../assets/perdue.jpg"),
          desc: "",
          color: "teal",
          location: "Muskegon, MI",
        },
        {
          name: "Priscila Ontiveros",
          img: require("../assets/ontiveros.png"),
          desc:
            "I have a big passion for coding, especially coding to help others. One of the aspects I love the most about coding is how it makes learning a lifestyle. I am a hard working passionate student with interests in back-end development. I have 2 years of experience with Java, 3 years with C and 6 months in Python and UNIX. I am ready to grow and learn as a software developer! ",
          color: "purple",
          location: "Grand Rapids, MI",
        },
        {
          name: "Devin Merchant",
          img: require("../assets/merchant.jpg"),
          desc: "",
          color: "orange",
          location: "",
        },
        {
          name: "Dayaseh Johnson",
          img: "",
          desc: "",
          color: "green",
          location: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
* {
  font-family: "Courier New";
}

h1 {
  font-family: "Courier New";
  color: white;
  font-size: calc(20px + 1.5vw);
}

p {
  font-size: calc(9px + 1.5vw);
  text-align: center;
  color: white;
}
.about-me {
  font-size: calc(12px + 0.6vw);
}
</style>
