<template>
  <div id="app">
    <header class="global-header">
        <router-link to='/' class='top-link'>my social</router-link>
        <router-link to='/signin' class='signin-link'>Sign In</router-link>
    </header>
    <div class="banner">
        <div class="banner-title">my social</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {
  }  
})
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.global-header {
  height: 24px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
}
.top-link {
  padding-left: 4%;
}
.signin-link {
  padding-right: 4%
}

.banner {
    text-align: center;
    height: 200px;
    background-color: #6aff6a;
}
.banner-title {
    padding-top: 50px;
    font-size: 32pt;
}
</style>