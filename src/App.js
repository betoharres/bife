import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './config/PrivateRoute'

import { NewPostContainer, HomeContainer } from './containers'

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
        <Router>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <PrivateRoute
              allow={this.props.isEditor && this.props.isAuthenticated}
              isLoading={this.props.isAuthenticating}
              path='/new-post' component={NewPostContainer} />
            <Route component={() => <div>Pagina nao encontrada</div>}/>
          </Switch>
        </Router>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps ({user}) {
  return {
    isEditor: user.get('isEditor'),
    isAuthenticated: user.get('isAuthenticated'),
    isAuthenticating: user.get('isLoading'),
  }
}

export default connect(mapStateToProps)(App)
