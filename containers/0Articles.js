import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Articles extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value } = this.props

    return (
      <div>
        <h3>{value}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { value } = state.router.params

  return {
    value
  }
}

Articles.propTypes = {
  value: PropTypes.string
}

export default connect(mapStateToProps, { })(Articles)
