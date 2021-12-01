<template>
  <v-app id="inspire">
    <NavBar/>

    <v-main>
  <router-view></router-view>
  <ChatBot class="bottom-please"/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ChatBot from './components/Chatbot.vue';
import Footer from './components/Chatbot.vue';

export default {
  name: 'App',

  components: {
   NavBar, ChatBot
  },

  data: () => ({
    //

  }),
};
</script>
<style scoped>
.bottom-please {
  position:absolute;
  bottom: 0px;
  right: 0%;
}

</style>
