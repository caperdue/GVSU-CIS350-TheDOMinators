<template>
  <v-app id="inspire">
    <NavBar/>

    <v-main>
  <router-view></router-view>
    </v-main>
    <v-alert right><h1>hi</h1></v-alert>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  components: {
   NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
