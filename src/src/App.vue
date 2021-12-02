<template>
  <v-app id="inspire">
     
    <NavBar/>
<Particles id="tsparticles" :options="particlesConfig"/>
    <v-main>
  <router-view></router-view>
    </v-main>
        <ChatBot class="bottom-please"/>
     <div class="footer">
        <v-img
          style="margin: auto"
          src="@/assets/cryptfo.png"
          max-width="200"
        ></v-img>
        <v-row class="justify-center pl-4 pt-2">
        <a href=""> <v-icon> fab fa-facebook </v-icon> </a>
        <a href=""> <v-icon> fab fa-pinterest </v-icon> </a>
        <a href=""> <v-icon> fab fa-instagram </v-icon> </a>
        <a href=""> <v-icon> fab fa-twitter </v-icon> </a>
        </v-row>
      </div>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ChatBot from './components/Chatbot.vue';
import particlesConfig from "./assets/particles.json";

export default {
  name: 'App',

  components: {
   NavBar, ChatBot
  },

 data () {
   return {
     particlesConfig,
   }
 }
};
</script>
<style scoped>
.bottom-please {
  position:absolute;
  bottom: 0px;
  right: 0%;
}
.footer{
    background-color: #16697a;
    width: 100%;
    margin-top: 5%;
  }
a {
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
}

</style>
