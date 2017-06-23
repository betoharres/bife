import React, { Component } from 'react'
import { Home } from 'components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postsActionCreators from 'redux/modules/posts'

class HomeContainer extends Component {

  async componentDidMount () {
    await this.props.fetchPosts()
  }

  render () {
    return (
      <Home posts={this.props.posts} isLoading={this.props.isLoading} />
    )
  }
}

function mapStateToProps ({posts}) {
  const onlyPosts = posts.delete('status')
  return {
    isLoading: posts.getIn(['status', 'isLoading']),
    posts: onlyPosts,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(postsActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
