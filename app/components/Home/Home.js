import React from 'react'
import Paper from 'material-ui/Paper'
import * as styles from './styles.css'

export default function Home (props) {

  const posts = [{title: 'Test - 1', content: 'content'},
                 {title: 'Test - 2', content: 'content 2'}]

  return (
    <div className={styles.container}>
      {posts.map( post => (
        <Paper className={styles.postContainer} zDepth={1}>
          <h1>{post.title}</h1>
          <span>{post.content}</span>
        </Paper>
      ))}
    </div>
  )

}
