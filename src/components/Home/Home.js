import React from 'react'
import { NewPostContainer } from '../../containers'
import { Loading } from '../../components'
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import TrashIcon from 'material-ui/svg-icons/action/delete-forever'
import EditIcon from 'material-ui/svg-icons/image/edit'
import renderHTML from 'react-render-html'

import { grey50, red600, amber500 } from 'material-ui/styles/colors'
import'./styles.css'

export default function Home (props) {
  return (
    <div>
      {props.isEditor ?
        <FloatingActionButton onClick={() => props.openModal(NewPostContainer)}
          style={{right: 30, bottom: 50, position: 'fixed'}}>
          <ContentAdd />
        </FloatingActionButton>
      : null}
      <div className='container'>
        {props.isLoading
          ? <Loading />
          : props.posts.entrySeq().map(([key, post]) => (
            <div key={key}>
              <Paper className='postTitleContainer' style={{backgroundColor: red600}} zDepth={1}>
                <span className='postTitle'>
                  {post.get('title')}
                  {props.isEditor ?
                    <span className='actionBtnTitle'>
                      <FlatButton label={'Editar'} icon={<EditIcon />}
                        style={{color: amber500}} />
                      <FlatButton label={'Deletar'} icon={<TrashIcon/>}
                        style={{color: grey50}} />
                    </span> : null }
                </span>
              </Paper>
              <Paper className='postContainer' zDepth={1}>
                <div>{renderHTML(post.get('content'))}</div>
              </Paper>
            </div>
        ))}
      </div>
    </div>
  )
}
