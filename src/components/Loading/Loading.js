import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

import './styles.css'

export default function Loading (props) {

  return (
    <div className='loadingContainer'>
      <CircularProgress size={100} thickness={7} />
    </div>
  )

}
