<template>
    <div class='main-page'>
        <div class='articles-area'>
            <articles></articles>
        </div>
        <div class='sidebar-area'>
            Sidebar will be available soon...
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Articles from './Articles.vue'
export default Vue.extend({
    name: 'MainPage',
    components: {
        Articles,
    }
})
</script>

<style lang="scss" scoped>
.main-page {
    display: flex;
}
.articles-area {
    flex: 3
}
.sidebar-area {
    flex: 1
}
</style>