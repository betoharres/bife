import React from 'react'
import { Loading } from '../../components'
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import renderHTML from 'react-render-html'
import'./styles.css'

export default function Home (props) {
  return (
    <div>
      <FloatingActionButton onClick={props.openModal}
        style={{right: 30, bottom: 50, position: 'fixed'}}>
        <ContentAdd />
      </FloatingActionButton>
      <div className='container'>
        {props.isLoading
          ? <Loading />
          : props.posts.entrySeq().map(([key, post]) => (
          <Paper key={key} className='postContainer' zDepth={1}>
            <div>{renderHTML(post.get('content'))}</div>
          </Paper>
        ))}
      </div>
    </div>
  )
}
