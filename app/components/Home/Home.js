import React from 'react'
import { Loading } from 'components'
import Paper from 'material-ui/Paper'
import renderHTML from 'react-render-html'
import * as styles from './styles.css'

export default function Home (props) {
  return (
    <div className={styles.container}>
      {props.isLoading
        ? <Loading />
        : props.posts.entrySeq().map(([key, post]) => (
        <Paper key={key} className={styles.postContainer} zDepth={1}>
          <div>{renderHTML(post.get('content'))}</div>
        </Paper>
      ))}
    </div>
  )
}
