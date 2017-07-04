import React, { Component, PropTypes } from 'react'

export default class Comment extends Component {
  render() {
    const comment = this.props.comment;
    return <div style={{display:'flex'}} key={comment.id}><div style={{width:'200px'}}>{comment.body}</div></div>
  }
}

Comment.propTypes = {
  comment: PropTypes.any.isRequired
}
