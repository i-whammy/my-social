<template>
    <div class='articles'>
        <div v-for='article in articles' v-bind:key='article.id'>
            <div class='article'>
                <article-meta-info :userId=article.userId :published=article.published :favoritesCount=article.favoritesCount />
                <div class='article-title'>{{article.title}}</div>
                <div class='read-more-link'>Read more...</div>
                <div class='tag-area'>
                    <div class='tag' v-for='tag in article.tags' v-bind:key='tag.value'>{{tag.value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '../domains/Article'
import ArticleMetaInfo from './ArticleMetaInfo.vue'
import Tag from '../domains/Tag'

export default Vue.extend({
    name: 'Articles',
    data: function() {
        return { articles: [
            new Article(1, 'Hello world!', 'user1', 'Jan 1st, 2021', 3, []),
            new Article(2, 'Hello world from 2nd user!', 'user2', 'Mar 1st, 2020', 2, [new Tag('Java')]),
            new Article(3, 'Hello world from 3rd user!', 'user3', 'Dec 1st, 2019', 5, [new Tag('Kotlin'), new Tag('TypeScript')]),
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

.read-more-link {
    font-size: 12px;
    margin: 8px 0;
}

.tag-area {
    display: flex;
}

.tag {
    border: solid 1px #bbbbbb;
    border-radius: 8px;
    color: #888aaa;
    font-size: 14px;
    padding: 2px 4px;
    margin-right: 8px;
}
</style>