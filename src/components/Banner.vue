<template>
    <div class="banner">
        <div class="banner-title">my social</div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Banner",
})
</script>
<style scoped>
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