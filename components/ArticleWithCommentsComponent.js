import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { loadArticleComponent, loadArticleWithCommentsComponent } from '../actions'
import { connect } from 'react-redux'
import Article from '../components/Article'
import Comments from '../components/Comments'

class ArticleWithCommentsComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadArticleComponent(this.props.value)
    this.props.loadArticleWithCommentsComponent(this.props.value)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.props.loadArticleComponent(nextProps.value)
      this.props.loadArticleWithCommentsComponent(nextProps.value)
    }
  }

  render() {
    /* const { login, avatarUrl, name } = this.props.user */
    if(!this.props.value || !this.props.articles || !this.props.articles[this.props.value]) {
      return <div>Loading article</div>
    }
    console.log('ArticleComponent render', this.props);
    const { value, articles, comments } = this.props
    return (
      <div className="ArticleWithCommentsComponent">
        <h3>ArticleWithCommentsComponent<hr/></h3>
        <div>Article</div>
        <div><Article article={articles[value]} /><hr/></div>
        <div>Comments</div>
        <div><Comments comments={comments} /><hr/></div>

      </div>
    )
  }
}

ArticleWithCommentsComponent.propTypes = {
  value: PropTypes.number,
  articles: PropTypes.any,
  comments: PropTypes.any,
  loadArticleComponent: PropTypes.func.isRequired,
  loadArticleWithCommentsComponent: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log('ArticleWithCommentsComponent state - ', state);
  const {
    entities: { articles, comments }
  } = state

  return {
    articles,
    comments
  }
}

export default connect(mapStateToProps, { loadArticleComponent, loadArticleWithCommentsComponent  })(ArticleWithCommentsComponent)
