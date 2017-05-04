import React, { Component } from 'react'
import { Loading } from 'components'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

class PrivateRoutes extends Component {

  render () {
    if (this.props.isEditor && this.props.isAuthenticated){
      return this.props.children
    } else if (this.props.isAuthenticating) {
      return <Route component={Loading} />
    } else {
      return <Route component={() => <div>Pagina nao encontrada</div>}/>
    }
  }
}

function mapStateToProps ({user}) {
  return {
    isEditor: user.get('isEditor'),
    isAuthenticating: user.get('isLoading'),
    isAuthenticated: user.get('isAuthenticated'),
  }
}

export default connect(mapStateToProps)(PrivateRoutes)
