import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { MainContainer, NewPostContainer } from 'containers'
import { Home } from 'components'

export default function routes (isEditor) {
  return (
    <Router>
      <MainContainer>
        <Route exact path='/' component={Home} />
        {isEditor
          ? <Route path='/new-post' component={NewPostContainer} /> : null}
      </MainContainer>
    </Router>
  )
}
