import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import SignInPage from './components/SignInPage.vue'
import SignUpPage from './components/SignUpPage.vue'
import App from './App.vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: HelloWorld },
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
