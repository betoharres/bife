import React from 'react'
import { reduxForm, Field, FormSection } from 'redux-form/immutable'
import { TextForm, ButtonForm } from 'components'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import { newPostContainer, fieldContainer, subContainerButton,
          paperContainer, fieldButtonContainer } from './styles.css'

const validate = values => {
  const errors = {}
  const postId = values.keySeq().first()

  if (postId) {
    errors[postId] = {}
    if (!values.getIn([postId, 'title'])) {
      errors[postId].title = 'Campo obrigatorio'
    } else if (values.getIn([postId, 'title']).length > 50) {
      errors[postId].title = 'Deve conter menos de 50 caracteres'
    } else if (/[^a-zA-Z0-9\s]/g.test(values.getIn([postId, 'title']))) {
      errors[postId].title = 'Deve conter somente letras e numeros'
    }

    if (!values.getIn([postId, 'content'])) {
      errors[postId].content = 'Campo obrigatorio'
    }
  }

  return errors
}

function NewPost (props) {

  let buttonText = ''
  if (props.isLoading) {
    buttonText = 'Carregando...'
  } else if (props.isLoading === false && props.isSaved) {
    buttonText = 'Atualizar'
  } else {
    buttonText = 'Enviar'
  }

  return (
    <div className={newPostContainer}>
      <Paper className={paperContainer}>
        <form onSubmit={props.handleSubmit}>

          <FormSection name={props.postId}>
            <div className={fieldContainer}>
              <Field name='title' label='Titulo' isLoading={props.isLoading}
                fullWidth={true} component={TextForm} />
            </div>

            <div className={fieldContainer}>
              <Field name='content' label='Conteudo' multiLine={true}
                isLoading={props.isLoading} fullWidth={true} component={TextForm} />
            </div>

            <div className={fieldButtonContainer}>
              <div className={subContainerButton}>
                <ButtonForm label={buttonText} fullWidth={true}
                  disabled={props.pristine || props.isLoading} />
              </div>
              <div className={subContainerButton}>
                <RaisedButton label={'Novo Post'} fullWidth={true}
                  onTouchTap={() => props.onResetForm(props.reset)}
                  disabled={props.pristine || props.isLoading} />
              </div>
            </div>
          </FormSection>

        </form>
      </Paper>
    </div>
  )

}

export default reduxForm({form: 'NewPost', validate})(NewPost)
