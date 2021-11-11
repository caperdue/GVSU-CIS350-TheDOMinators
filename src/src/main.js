import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { AppRouter } from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router: AppRouter,
  render: h => h(App)
}).$mount('#app')
