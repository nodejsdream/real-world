import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { loadArticlesList } from '../actions'
import { connect } from 'react-redux'
import Articles from '../components/Articles'

class ArticlesList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadArticlesList(this.props.value.url)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value.url !== nextProps.value.url) {
      this.props.loadArticlesList(nextProps.value.url)
    }
  }

  render() {
    if(!this.props.value || !this.props.value.url) {
      return <div>Loading article list</div>
    }
    const { url, id } = this.props.value
    const { articles } = this.props.articles

    return (
      <div className="ArticlesList">
        <h3>ArticlesList</h3>
        <Articles articles={this.props.articles} />
      </div>
    )
  }
}

ArticlesList.propTypes = {

  value: PropTypes.shape({
    url: PropTypes.string,
    component: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  articles: PropTypes.any,
  loadArticlesList: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  console.log('ArticlesList state - ', state);
  const {
    entities: { articles }
  } = state

  return {
    articles
  }
}

export default connect(mapStateToProps, { loadArticlesList  })(ArticlesList)
