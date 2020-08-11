<template>
    <header class="global-header">
        <a href="#" class="top-link">my social</a>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'GlobalHeader',
})
</script>

<style scoped>
.global-header {
    height: 40px;
    padding: 8px 0;
    text-align: left;
}
.top-link {
    padding-left: 4%;
}
</style>