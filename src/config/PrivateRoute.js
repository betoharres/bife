import React, { Component } from 'react'
import { Loading } from 'components'
import { Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => {
    if (rest.allow) {
      return <Component {...props} />
    } else if (rest.isLoading) {
      return <Loading />
    } else {
      return <Route component={() => <div>Pagina nao encontrada</div>} />
    }
  }}/>
}
export default PrivateRoute
