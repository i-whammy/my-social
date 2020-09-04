import Tag from './Tag';

export default class Article {
    id: number;
    title: string;
    userId: string;
    published: string;
    favoritesCount: number;
    tags: Tag[];

    constructor(id: number, title: string, userId: string, published: string, favoriteCount: number, tags: Tag[]) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.published = published;
        this.favoritesCount = favoriteCount;
        this.tags = tags;
    }
}