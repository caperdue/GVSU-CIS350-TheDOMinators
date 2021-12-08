<template>
  <v-col md="4">
    <v-card>
      <v-system-bar color="#32c8c5">
        <v-icon>mdi-chat</v-icon>
        <span>Cryptfo Help Bot</span>
        <v-spacer></v-spacer>
        <v-icon v-if="!show" @click="show = !show" right>mdi-plus</v-icon>
        <v-icon v-else @click="show = !show" right>mdi-minus</v-icon>
      </v-system-bar>
      <div v-show="show" class="pa-2">
        <div id="chatBox">
          <template v-for="(item, index) in msgs" >
            <BotMessage v-if="item.type === 'bot'" :message="item.message" :key="index"/>
            <UserMessage v-else :message="item.message" :key="index"/>
          </template>
        </div>
        <v-textarea
          v-model="msgText"
          hide-details
          filled
          auto-grow
          :row-height="1"
        ></v-textarea>
      </div>
      <v-system-bar color="#2a2a2a" v-show="show" dark> </v-system-bar>
    </v-card>
  </v-col>
</template>

<script>
import UserMessage from "./nested/UserMessage.vue";
import BotMessage from "./nested/BotMessage.vue";
import Bot from "@/bot";
export default {
  components: {
    BotMessage,
    UserMessage,
  },

  data() {
    return {
      msgText: "",
      show: false,
      msgs: [{ type: "bot", message: "Hi there! Type help for a list of keywords that Crypto Help Bot can understand to help you." }],
    };
  },

  mounted() {
    const bot = new Bot();
    window.addEventListener("keyup", (ev) => {
      if (ev.key === "Enter") {
        this.msgs.push({ type: "user", message: this.msgText });
        bot.getBotResponse(this.msgText).then(responses => 
      
        {
            console.log(responses)
           responses.forEach(response => {
            this.msgs.push({ type: "bot", message: response })
        })
        ;
        
        });
       this.msgText = "";

        this.scrollToBottom();
        // Here is where you would want to add a wait time and respond to the messages
      }
    });
  },

  updated() {
    this.scrollToBottom();
  },

  methods: {
    scrollToBottom() {
      const chatbox = document.getElementById("chatBox");
      chatbox.scrollTop = chatbox.scrollHeight;
      console.log(chatbox.scrollTop);
    },
  },
};
</script>

<style scoped>
#chatBox {
  overflow-y:auto;
  max-height: 500px;
}
.chat-bubble {
  margin-left: 10px;
  margin-right: 10px;
}
.row {
  margin-top: 0px;
}
.col-md-8 {
  padding: 2px;
}
</style>
