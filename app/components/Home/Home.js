import React from 'react'
import renderHTML from 'react-render-html'
import Paper from 'material-ui/Paper'
import * as styles from './styles.css'

export default function Home (props) {
  return (
    <div className={styles.container}>
      {props.posts.entrySeq().map(([key, post]) => (
        <Paper key={key} className={styles.postContainer} zDepth={1}>
          <h1>{post.get('title')}</h1>
          <span>{renderHTML(post.get('content'))}</span>
        </Paper>
      ))}
    </div>
  )

}
