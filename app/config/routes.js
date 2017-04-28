import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { MainContainer, NewPostContainer } from 'containers'
import { Home } from 'components'

export default function routes () {
  return (
    <Router>
      <MainContainer>
        <Route path='/newPost' component={NewPostContainer} />
        <Route exact path='/' component={Home} />
      </MainContainer>
    </Router>
  )
}
