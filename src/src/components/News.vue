<template>
  <v-container>
    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>BTC News</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row class="my-5">
            <v-col
              md="4"
              v-for="(item, index) in newsBTC.articles"
              :key="index"
            >
              <v-card class="mx-auto" max-width="344">
                <v-img :src="item.urlToImage" height="200px"></v-img>

                <v-card-title>
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

                <v-card-actions>
                  <v-btn color="orange lighten-2" text> Explore </v-btn>

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
                      I'm a thing. But, like most politicians, he promised more
                      than he could deliver. You won't have time for sleeping,
                      soldier, not with all the bed making you'll be doing. Then
                      we'll go with that data file! Hey, you add a one and two
                      zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      
    </v-expansion-panels>

        <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>ETH News</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row class="my-5">
            <v-col
              md="4"
              v-for="(item, index) in newsBTC.articles"
              :key="index"
            >
              <v-card class="mx-auto" max-width="344">
                <v-img :src="item.urlToImage" height="200px"></v-img>

                <v-card-title>
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

                <v-card-actions>
                  <v-btn color="orange lighten-2" text> Explore </v-btn>

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
                      I'm a thing. But, like most politicians, he promised more
                      than he could deliver. You won't have time for sleeping,
                      soldier, not with all the bed making you'll be doing. Then
                      we'll go with that data file! Hey, you add a one and two
                      zeros to that or we walk! You're going to do his laundry?
                      I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      
    </v-expansion-panels>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "News",

  data() {
    return {
      newsBTC: [],
      newsETH: [],
      show: false,
    };
  },

  created() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=BTC&from=2021-10-19&sortBy=publishedAt&apiKey=d547e4173b4a4a838565cf33fa069dd8"
      )
      .then((res) => (this.newsBTC = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style

</style>