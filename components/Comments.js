import React, { Component, PropTypes } from 'react'
import Comment from '../components/Comment'

export default class Comments extends Component {
  render() {
    const comments = this.props.comments;
    var articleComponents = Object.keys(comments).map(function(it){
      return <Comment comment={comments[it]} key={comments[it].id} />
    });
    return <div>{articleComponents}</div>;
  }
}

Comments.propTypes = {
  comments: PropTypes.any.isRequired
}
