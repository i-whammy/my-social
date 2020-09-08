<template>
    <div class='articles'>
        <paginate name='articlesList' :list='articles' :per=5>
            <div v-for="article in paginated('articlesList')" v-bind:key='article.id'>
                <div class='article'>
                    <article-meta-info :userId=article.userId :published=article.published :favoritesCount=article.favoritesCount />
                    <div class='article-title'>{{article.title}}</div>
                    <div class='read-more-link'>Read more...</div>
                    <div class='tag-area'>
                        <div class='tag' v-for='tag in article.tags' v-bind:key='tag.value'>{{tag.value}}</div>
                    </div>
                </div>
            </div>
        </paginate>
        <paginate-links for="articlesList" :show-step-links="true"></paginate-links>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleMetaInfo from './ArticleMetaInfo.vue'

export default Vue.extend({
    name: 'Articles',
    data: function() {
        return { 
            articles: this.$store.state.articles,
            paginate: ['articlesList']
        }
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

ul.paginate-links {
    display: flex;
    list-style: none;
}
</style>