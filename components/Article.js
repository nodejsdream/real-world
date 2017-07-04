import React, { Component, PropTypes } from 'react'

export default class Article extends Component {
  render() {
    const article = this.props.article;
    return <div style={{display:'flex'}} key={article.id}><div style={{width:'200px'}}>{article.author}</div><div>{article.title}</div></div>
  }
}

Article.propTypes = {
  article: PropTypes.any.isRequired
}
