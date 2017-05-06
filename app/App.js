import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './config/PrivateRoute'

import { NewPostContainer } from 'containers'
import { Home } from 'components'

import { authenticateUser } from 'redux/modules/user'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as styles from './styles.css'

class App extends Component {

  async componentWillMount () {
    await this.props.dispatch(authenticateUser())
  }

  render () {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute
              allow={this.props.isEditor && this.props.isAuthenticated}
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
  }
}

export default connect(mapStateToProps)(App)
