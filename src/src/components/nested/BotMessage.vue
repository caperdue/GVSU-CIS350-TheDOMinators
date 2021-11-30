<template>
  <v-row>
    <v-col md="8" offset-md="4">
      <v-card light class="chat-bubble">
        <p class="text--secondary font-weight-light px-2">
           {{ message }}
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['message'] 
  
};
</script>

<style></style>
