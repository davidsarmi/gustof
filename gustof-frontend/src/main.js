import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  colors,
  render: h => h(App)
}).$mount('#app')
