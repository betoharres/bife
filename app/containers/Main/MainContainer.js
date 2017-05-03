import React, { Component } from 'react'
import { Home } from 'components'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { authenticateUser } from 'redux/modules/user'

class Main extends Component {

  async componentDidMount () {
    await this.props.dispatch(authenticateUser())
  }

  render () {
    return (
      <MuiThemeProvider>
        <div id="container">
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect()(Main)
