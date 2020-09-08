import Vue from 'vue'
import Vuex from 'vuex'
import Article from './domains/Article'
import Tag from './domains/Tag'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      articles: [
            new Article(1, 'Hello world!', 'user1', 'Jan 1st, 2021', 3, []),
            new Article(2, 'Hello world from 2nd user!', 'user2', 'Mar 1st, 2020', 2, [new Tag('Java')]),
            new Article(3, 'Hello world from 3rd user!', 'user3', 'Dec 1st, 2019', 5, [new Tag('Kotlin'), new Tag('TypeScript')]),
            new Article(4, 'Hello world!', 'user1', 'Jan 1st, 2021', 3, []),
            new Article(5, 'Hello world from 2nd user!', 'user2', 'Mar 1st, 2020', 2, [new Tag('Java')]),
            new Article(6, 'Hello world from 3rd user!', 'user3', 'Dec 1st, 2019', 5, [new Tag('Kotlin'), new Tag('TypeScript')]),
            new Article(7, 'Hello world!', 'user1', 'Jan 1st, 2021', 3, []),
            new Article(8, 'Hello world from 2nd user!', 'user2', 'Mar 1st, 2020', 2, [new Tag('Java')]),
            new Article(9, 'Hello world from 3rd user!', 'user3', 'Dec 1st, 2019', 5, [new Tag('Kotlin'), new Tag('TypeScript')]),
            new Article(10, 'Hello world!', 'user1', 'Jan 1st, 2021', 3, []),
            new Article(11, 'Hello world from 2nd user!', 'user2', 'Mar 1st, 2020', 2, [new Tag('Java')]),
            new Article(12, 'Hello world from 3rd user!', 'user3', 'Dec 1st, 2019', 5, [new Tag('Kotlin'), new Tag('TypeScript')]),
        ]
    }
  })
  