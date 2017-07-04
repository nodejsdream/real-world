const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const USER = createRequestTypes('USER')
export const LINKS = createRequestTypes('LINKS')
export const ARTICLESLIST = createRequestTypes('ARTICLESLIST')
export const ARTICLECOMPONENT = createRequestTypes('ARTICLECOMPONENT')
export const COMMENTS = createRequestTypes('COMMENTS')
export const REPO = createRequestTypes('REPO')
export const STARRED = createRequestTypes('STARRED')
export const STARGAZERS = createRequestTypes('STARGAZERS')

export const UPDATE_ROUTER_STATE = 'UPDATE_ROUTER_STATE'
export const NAVIGATE =  'NAVIGATE'
export const LOAD_USER_PAGE = 'LOAD_USER_PAGE'
export const LOAD_REPO_PAGE = 'LOAD_REPO_PAGE'
export const LOAD_MORE_STARRED = 'LOAD_MORE_STARRED'
export const LOAD_MORE_STARGAZERS = 'LOAD_MORE_STARGAZERS'
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'
export const LOAD_LINKS_PAGE = 'LOAD_LINKS_PAGE'
export const LOAD_ARTICLESLIST = 'LOAD_ARTICLESLIST'
export const LOAD_ARTICLECOMPONENT = 'LOAD_ARTICLECOMPONENT'
export const LOAD_COMMENTS = 'LOAD_COMMENTS'

/*
ArticlesList
ArticleComponent
ArticleWithCommentsComponent
*/


function action(type, payload = {}) {
  return {type, ...payload}
}

export const user = {
  request: login => action(USER[REQUEST], {login}),
  success: (login, response) => action(USER[SUCCESS], {login, response}),
  failure: (login, error) => action(USER[FAILURE], {login, error}),
}

/*===================================*/
export const links = {
  request: value => action(LINKS[REQUEST], {value}),
  success: (value, response) => action(LINKS[SUCCESS], {value, response}),
  failure: (value, error) => action(LINKS[FAILURE], {value, error}),
}

export const articles = {
  request: value => action(ARTICLESLIST[REQUEST], {value}),
  success: (value, response) => action(ARTICLESLIST[SUCCESS], {value, response}),
  failure: (value, error) => action(ARTICLESLIST[FAILURE], {value, error}),
}

export const article = {
  request: value => action(ARTICLECOMPONENT[REQUEST], {value}),
  success: (value, response) => action(ARTICLECOMPONENT[SUCCESS], {value, response}),
  failure: (value, error) => action(ARTICLECOMPONENT[FAILURE], {value, error}),
}

export const comments = {
  request: value => action(COMMENTS[REQUEST], {value}),
  success: (value, response) => action(COMMENTS[SUCCESS], {value, response}),
  failure: (value, error) => action(COMMENTS[FAILURE], {value, error}),
}

export const repo = {
  request: fullName => action(REPO[REQUEST], {fullName}),
  success: (fullName, response) => action(REPO[SUCCESS], {fullName, response}),
  failure: (fullName, error) => action(REPO[FAILURE], {fullName, error}),
}

export const starred = {
  request: login => action(STARRED[REQUEST], {login}),
  success: (login, response) => action(STARRED[SUCCESS], {login, response}),
  failure: (login, error) => action(STARRED[FAILURE], {login, error}),
}

export const stargazers = {
  request: fullName => action(STARGAZERS[REQUEST], {fullName}),
  success: (fullName, response) => action(STARGAZERS[SUCCESS], {fullName, response}),
  failure: (fullName, error) => action(STARGAZERS[FAILURE], {fullName, error}),
}

export const updateRouterState = state => action(UPDATE_ROUTER_STATE, {state})
export const navigate = pathname => action(NAVIGATE, {pathname})
export const loadUserPage = (login, requiredFields = []) => action(LOAD_USER_PAGE, {login, requiredFields})
export const loadLinksPage = (value, requiredFields = []) => action(LOAD_LINKS_PAGE, {value, requiredFields})
export const loadArticlesList = (value, requiredFields = []) => action(LOAD_ARTICLESLIST, {value, requiredFields})
export const loadArticleComponent = (value, requiredFields = []) => action(LOAD_ARTICLECOMPONENT, {value, requiredFields})
export const loadArticleWithCommentsComponent = (value, requiredFields = []) => action(LOAD_COMMENTS, {value, requiredFields})
export const loadRepoPage = (fullName, requiredFields = []) => action(LOAD_REPO_PAGE, {fullName, requiredFields})
export const loadMoreStarred = login => action(LOAD_MORE_STARRED, {login})
export const loadMoreStargazers = fullName => action(LOAD_MORE_STARGAZERS, {fullName})

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE)
