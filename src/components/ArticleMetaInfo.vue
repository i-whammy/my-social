<template>
    <div class='article-metainfo'>
        <div>
            <div class='article-user'>{{userId}}</div>
            <div class='article-published'>{{published}}</div>
        </div>
        <button class='favorite-button'>Likes: {{favoritesCount}}</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'ArticleMetaInfo',
    props: {
        userId: String,
        published: String,
        favoritesCount: Number,
    }
})
</script>

<style lang="scss" scoped>
.article-user {
    font-size: 20px;
}

.article-published {
    font-size: 12px;
}

.article-metainfo {
    display: flex;
    justify-content: space-between;
}

.favorite-button {
    height: 32px;
    margin-right: 16px;
}
</style>