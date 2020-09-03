export default class Article {
    id: number;
    title: string;
    userId: string;
    published: string;
    favoritesCount: number;

    constructor(id: number, title: string, userId: string, published: string, favoriteCount: number) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.published = published;
        this.favoritesCount = favoriteCount;
    }
}