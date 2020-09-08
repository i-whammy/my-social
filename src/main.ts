import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import { store } from './store'

Vue.config.productionTip = false

var VuePaginate = require('vue-paginate')
Vue.use(VuePaginate)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
