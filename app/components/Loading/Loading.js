import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'

import * as styles from './styles.css'

export default function Loading (props) {

  return (
    <div className={styles.loadingContainer}>
      <CircularProgress size={100} thickness={7} />
    </div>
  )

}
