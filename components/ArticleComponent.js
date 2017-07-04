import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { loadArticleComponent } from '../actions'
import { connect } from 'react-redux'
import Article from '../components/Article'

class ArticleComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadArticleComponent(this.props.value)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.props.loadArticleComponent(nextProps.value)
    }
  }

  render() {
    /* const { login, avatarUrl, name } = this.props.user */
    if(!this.props.value || !this.props.articles || !this.props.articles[this.props.value]) {
      return <div>Loading article</div>
    }
    console.log('ArticleComponent render', this.props);
    const { value, articles } = this.props
    return (
      <div className="ArticleComponent">
        <h3>ArticleComponent</h3>
        <div><Article article={articles[value]} /></div>
      </div>
    )
  }
}

ArticleComponent.propTypes = {
  value: PropTypes.number,
  articles: PropTypes.any,
  loadArticleComponent: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log('ArticleComponent state - ', state);
  const {
    entities: { articles }
  } = state

  return {
    articles
  }
}

export default connect(mapStateToProps, { loadArticleComponent  })(ArticleComponent)
