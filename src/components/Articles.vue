<template>
    <div class='articles'>
        <div v-for='article in articles' v-bind:key='article.id'>
            <div class='article'>
                <article-meta-info :userId=article.userId :published=article.published :favoritesCount=article.favoritesCount />
                <div class='article-title'>{{article.title}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '../domains/Article'
import ArticleMetaInfo from './ArticleMetaInfo.vue'

export default Vue.extend({
    name: 'Articles',
    data: function() {
        return { articles: [
            new Article(1, 'Hello world!', 'user1', 'Jan 1st, 2021', 3),
            new Article(2, 'Hello world from 2nd user!', 'user2', 'Mar 1st, 2020', 2),
            new Article(3, 'Hello world from 3rd user!', 'user3', 'Dec 1st, 2019', 5),
        ]}
    },
    components: {
        ArticleMetaInfo,
    }
})
</script>

<style lang="scss" scoped>
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