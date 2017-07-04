import React, { Component, PropTypes } from 'react'
import Article from '../components/Article'

export default class Articles extends Component {
  render() {
    const articles = this.props.articles;
    var articlesListComponents = Object.keys(articles).map(function(it){
      return <Article article={articles[it]} key={articles[it].id} />
    });
    return <div>{articlesListComponents}</div>;
  }
}

Articles.propTypes = {
  articles: PropTypes.any.isRequired
}
