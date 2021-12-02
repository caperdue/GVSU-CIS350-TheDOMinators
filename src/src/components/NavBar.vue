<template>
  <v-app-bar app dark color="#003561">
    <v-img class="ma-5" src="@/assets/cryptfo.png" max-width="200"></v-img>
    <template v-slot:extension>
      <v-tabs color="#80ffd9" dark slider-color="#80ffdb">
        <v-tab v-for="item in items" :key="item.route" :to="item.route">
          {{ item.tab }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      tab: null,
      items: [
        { tab: "Home", route: "/" },
        { tab: "Prices", route: "/prices" },
        { tab: "News", route: "/news" },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.v-tab {
   font-family: 'Anton', monospace;
   font-size: 8rem;

}
</style>
