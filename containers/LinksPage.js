import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadLinksPage } from '../actions'
import ArticlesList from '../components/ArticlesList'
import ArticleComponent from '../components/ArticleComponent'
import ArticleWithCommentsComponent from '../components/ArticleWithCommentsComponent'
import createFragment from 'react-addons-create-fragment';

class LinksPage extends Component {
  constructor(props) {
    super(props)
    this.renderArticlesList = this.renderArticlesList.bind(this)
    this.renderArticleComponent = this.renderArticleComponent.bind(this)
    this.renderArticleWithCommentsComponent = this.renderArticleWithCommentsComponent.bind(this)
  }

  componentWillMount() {
      this.props.loadLinksPage(this.props.value + (!!this.props.id?'/'+this.props.id:'') + (!!this.props.flag?'/'+this.props.flag:''))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value || this.props.id !== nextProps.id  || this.props.flag !== nextProps.flag ) {
      this.props.loadLinksPage(nextProps.value + (!!nextProps.id?'/'+nextProps.id:'') + (!!nextProps.flag?'/'+nextProps.flag:''))
    }
  }

  renderArticlesList([ value ]) {
    return (
      <ArticlesList value={value} />
    )
  }

  renderArticleComponent([ value ]) {
    return (
      <ArticleComponent value={value} />
    )
  }

  renderArticleWithCommentsComponent([ value ]) {
    return (
      <ArticleWithCommentsComponent value={value} />
    )
  }

  render() {
    const { value, links, id, flag } = this.props
    let renderComponent = ''

    if (!value) {
      return <h1><i>Loading {value} </i></h1>
    }
    console.log('LinksPage render ------------------------ ', links, value);

    if (!!id) {
      if (!!flag && !! links[value+'/'+id +'/'+flag]) {
        renderComponent = links[value+'/'+id +'/'+flag]
        console.log('LinksPage return', renderComponent.id, links, value, id)
        return (
          <div>
            <ArticleWithCommentsComponent value={renderComponent.id} />
          </div>
        )
      } else if(!!links && !! links[value+'/'+id]) {
        renderComponent = links[value+'/'+id]
        return (
          <div>
            <ArticleComponent value={renderComponent.id}/>
          </div>
        )
      }
    } else {
      if (!!links && !!value && links[value]) {
        renderComponent = links[value]
        return (
          <div>
            <ArticlesList value={renderComponent} />
          </div>
        )
      }
    }
    return (
      <div>
        <h3><i>Loading </i></h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { value, id, flag } = state.router.params
  const {
    entities: { links }
  } = state
  console.log('LinksPage mapStateToProps', links)

  return {
    value,
    links,
    id,
    flag
  }
}

LinksPage.propTypes = {
  value: PropTypes.string,
  links: PropTypes.object,
  id: PropTypes.string,
  flag: PropTypes.string,
  loadLinksPage: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { loadLinksPage })(LinksPage)
