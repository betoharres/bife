import React, { Component } from 'react'
import { Home } from '../../components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postsActionCreators from '../../redux/modules/posts'
import * as modalActionCreators from '../../redux/modules/modal'

class HomeContainer extends Component {

  handleOpenModal (component) {
    this.props.openModal(component)
  }

  async handleDeletePost (post) {
    await this.props.deletePostRequest(post)
  }

  async componentDidMount () {
    await this.props.fetchPosts()
  }

  render () {
    return (
      <Home posts={this.props.posts}
        isEditor={this.props.isEditor}
        isLoading={this.props.isLoading}
        onDeletePost={(post) => this.handleDeletePost(post)}
        openModal={(component) => this.handleOpenModal(component)} />
    )
  }
}

function mapStateToProps ({user, posts}) {
  const onlyPosts = posts.delete('status')
  return {
    isLoading: posts.getIn(['status', 'isLoading']),
    isEditor: user.get('isEditor'),
    posts: onlyPosts,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...postsActionCreators,
    ...modalActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
