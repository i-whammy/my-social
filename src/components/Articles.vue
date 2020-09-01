<template>
    <div class='articles'>
        <div v-for='article in articles' v-bind:key='article.id'>{{article.title}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Articles',
    data: function() {
        return { articles: [
            { title: 'Hello world!', id: 1 },
            { title: 'Hello world 2nd!', id: 2 },
            { title: 'Hello world 3rd!', id: 3 },
        ]}
    }
})
</script>