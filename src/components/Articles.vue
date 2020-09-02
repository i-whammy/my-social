<template>
    <div class='articles'>
        <div v-for='article in articles' v-bind:key='article.id'>
            <div class='article'>
                <div class='article-user'>{{article.userId}}</div>
                <div class='article-title'>{{article.title}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Articles',
    data: function() {
        return { articles: [
            { title: 'Hello world!', id: 1, userId: 'aaaa' },
            { title: 'Hello world 2nd!', id: 2, userId: 'eeee' },
            { title: 'Hello world 3rd!', id: 3, userId: 'ccccc' },
        ]}
    }
})
</script>

<style lang="scss" scoped>
.articles {
}

.article {
    border-top: solid 1px;
    height: 160px;
    padding: 16px;
}

.article-title {
    font-size: 24px;
    margin: 16px 0;
}
</style>