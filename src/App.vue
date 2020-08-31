<template>
  <div id="app">
    <global-header></global-header>
    <banner></banner>
    <router-link to='/signin'>Sign In</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from './components/Banner.vue'
import GlobalHeader from './components/GlobalHeader.vue'

export default Vue.extend({
  name: 'App',
  components: {
    GlobalHeader,
    Banner,
  }  
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
