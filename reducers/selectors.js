
export const getUser = (state, login) => state.entities.users[login]
export const getRepo = (state, fullName) => state.entities.repos[fullName]
export const getStarredByUser = (state, login) => state.pagination.starredByUser[login] || {}
export const getStargazersByRepo = (state, fullName) => state.pagination.stargazersByRepo[fullName] || {}

export const getLinks = (state, value) => {
  console.log(state.entities.links);
//  state.entities.links[value]
}
export const getArticlesList = (state, value) => {
//  state.entities.articles[value]
console.log(state.entities);
}
export const getArticleComponent = (state, value) => {
//  state.entities.articles[value]
console.log('getArticleComponent', state.entities, value);
}
export const getArticleWithCommentsComponent = (state, value) => {
//  state.entities.articles[value]
console.log('ArticleWithCommentsComponent', state.entities, value);
}
