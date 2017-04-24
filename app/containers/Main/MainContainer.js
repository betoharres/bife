import React, { Component } from 'react'
import { Home } from 'components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Main extends Component {

  render () {
    return (
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    )
  }
}

export default Main
