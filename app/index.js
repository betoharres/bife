import React from 'react'
import ReacDOM from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import routes from './config/routes'
import { hashHistory, browserHistory } from 'react-router'

import { authUser } from 'auth'

async function checkAuth () {
  const uid = await authUser()
}

ReacDOM.render(routes(), document.getElementById('app'))
