import Vue from 'vue'
import Articles from './components/Articles.vue'
import SignInPage from './components/SignInPage.vue'
import SignUpPage from './components/SignUpPage.vue'
import App from './App.vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: Articles },
  { path: '/signin', component: SignInPage },
  { path: '/signup', component: SignUpPage }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
