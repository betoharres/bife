import React, { Component } from 'react'
import { NewPost } from '../../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { generatePostKey } from '../../api'
import * as postsActionCreators from '../../redux/modules/posts'
import * as modalActionCreators from '../../redux/modules/modal'

class NewPostContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      postId: '',
      isSaved: false,
    }
  }

  componentWillMount () {
    this.setState({postId: generatePostKey()})
  }

  handleSubmitPost (post) {
    post = post.merge({timestamp: Date.now()})
    this.setState({isSaved: true})
    this.props.savePost({[this.state.postId]: post.toJS()})
    this.props.closeModal()
  }

  handleResetForm (reset) {
    this.setState({postId: generatePostKey(), isSaved: false})
    reset()
  }

  render () {
    return (
      <NewPost postId={this.state.postId} isSaved={this.state.isSaved}
        onResetForm={(cb) => this.handleResetForm(cb)} isLoading={this.props.isLoading}
        onSubmit={(post) => this.handleSubmitPost(post)} />
    )
  }
}

function mapStateToProps ({posts}) {
  return {
    isLoading: posts.getIn(['status', 'isLoading']),
  }
}

function mapDispatchToPros (dispatch) {
  return bindActionCreators({
    ...modalActionCreators,
    ...postsActionCreators}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToPros)(NewPostContainer)
