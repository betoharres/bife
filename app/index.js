import React from 'react'
import ReacDOM from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import App from './App'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './redux/modules'
import { reducer as formReducer } from 'redux-form/immutable'

const store = createStore(
  combineReducers({...reducers, form: formReducer}),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

ReacDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'))
