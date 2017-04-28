import React, { Component } from 'react'
import { Home } from 'components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Main extends Component {

  render () {
    return (
      <MuiThemeProvider>
        <div id="appContainer">
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main
