import React from 'react'
import ReacDOM from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import { MainContainer } from 'containers'

ReacDOM.render(<MainContainer />, document.getElementById('app'))
