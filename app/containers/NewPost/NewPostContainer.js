import React, { Component } from 'react'
import { NewPost } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getPostKey } from 'api'
import * as postsActionCreators from 'redux/modules/posts'

class NewPostContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      postId: '',
    }
  }

  componentWillMount () {
    this.setState({
      postId: getPostKey()
    })
  }

  handleSubmitPost (post) {
    this.props.savePost(post)
  }

  render () {
    return (
      <NewPost postId={this.state.postId}
        onSubmit={(post) => this.handleSubmitPost(post)} />
    )
  }
}

function mapDispatchToPros (dispatch) {
  return bindActionCreators(postsActionCreators, dispatch)
}
export default connect(null, mapDispatchToPros)(NewPostContainer)
