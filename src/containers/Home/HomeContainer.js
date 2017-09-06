import React, { Component } from 'react'
import { Home } from '../../components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postsActionCreators from '../../redux/modules/posts'
import { openModal } from '../../redux/modules/modal'

class HomeContainer extends Component {

  handleOpenModal (component) {
    this.props.openModal(component)
  }

  async componentDidMount () {
    await this.props.fetchPosts()
  }

  render () {
    return (
      <Home posts={this.props.posts}
        isEditor={this.props.isEditor}
        isLoading={this.props.isLoading}
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
  return bindActionCreators({...postsActionCreators, openModal}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
