import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import LinksPage from './containers/LinksPage'

export default (
  <Route path="/" component={App}>
    <Route path="/:value"
           component={LinksPage} />
    <Route path="/:value/:id"
           component={LinksPage} />
    <Route path="/:value/:id/:flag"
           component={LinksPage} />
  </Route>
)
/*

<Route path="/:login"
       component={UserPage} />
<Route path="/:login/:name"
       component={RepoPage} />

<Route path="/:value"
       component={LinkPage} />
<Route path="/:value/:id"
       component={LinkPage} />
       */
