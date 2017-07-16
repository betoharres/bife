import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { HomeContainer, ModalContainer } from './containers'

import { authenticateUser } from './redux/modules/user'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {

  async componentWillMount () {
    await this.props.dispatch(authenticateUser())
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <ModalContainer />
          <Router>
            <Switch>
              <Route exact path='/' component={HomeContainer} />
              <Route component={() => <div>Pagina nao encontrada</div>}/>
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect()(App)
