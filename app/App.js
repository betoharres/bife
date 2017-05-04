import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import { NewPostContainer } from 'containers'
import { Home } from 'components'
import PrivateRoutes from './config/PrivateRoutes'

import { authenticateUser } from 'redux/modules/user'
import { connect } from 'react-redux'

import * as styles from './styles.css'
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
            <Route exact path='/' component={Home} />
            <PrivateRoutes>
              <Switch>
                <Route path='/new-post' component={NewPostContainer} />
                <Route component={() => <div>Pagina nao encontrada</div>}/>
              </Switch>
            </PrivateRoutes>
          </Switch>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default connect()(App)
