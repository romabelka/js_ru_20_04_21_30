import {createSelector} from 'reselect'

export const articlesGetter = state => state.articles
export const filtersGetter = state => state.filters

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    console.log('---', 'recompute filtrated articles')

    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})
