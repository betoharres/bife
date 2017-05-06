import React, { Component } from 'react'
import { Loading } from 'components'
import { Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => (
    rest.allow ? (
      <Component {...props} />
    ) : (
      <Loading />
    )
  )}/>
}
export default PrivateRoute
