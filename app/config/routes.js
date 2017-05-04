import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import { MainContainer, NewPostContainer } from 'containers'
import { Home } from 'components'

import { authenticateUser } from 'redux/modules/user'
import { connect } from 'react-redux'

import PrivateRoutes from './PrivateRoutes'
import * as styles from './styles.css'

class App extends Component {

  async componentWillMount () {
    await this.props.dispatch(authenticateUser())
  }

  render () {
    return (
      <Router>
        <MainContainer>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoutes>
              <Switch>
                <Route path='/new-post' component={NewPostContainer} />
                <Route component={() => <div>Pagina nao encontrada</div>}/>
              </Switch>
            </PrivateRoutes>
          </Switch>
        </MainContainer>
      </Router>
    )
  }
}

function mapStateToProps ({user}) {
  return {
    isAuthenticating: user.get('isLoading'),
    isAuthenticated: user.get('isAuthenticated'),
    isEditor: user.get('isEditor'),
  }
}

export default connect(mapStateToProps)(App)
