import MainPage from './components/MainPage.vue'
import SignInPage from './components/SignInPage.vue'
import SignUpPage from './components/SignUpPage.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: MainPage },
    { path: '/signin', component: SignInPage },
    { path: '/signup', component: SignUpPage }
]

export const router = new VueRouter({ routes })
