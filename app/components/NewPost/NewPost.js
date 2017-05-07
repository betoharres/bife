import React from 'react'
import { reduxForm, Field, FormSection } from 'redux-form/immutable'
import { TextForm, ButtonForm } from 'components'
import Paper from 'material-ui/Paper'

import { newPostContainer, fieldContainer, paperContainer } from './styles.css'

const validate = values => {
  const errors = {}
  const postId = values.keySeq().first()

  if (postId) {
    errors[postId] = {}
    if (!values.getIn([postId, 'title'])) {
      errors[postId].title = 'Campo obrigatorio'
    } else if (values.getIn([postId, 'title']).length > 50) {
      errors[postId].title = 'Deve conter menos de 50 caracteres'
    } else if (/\W/g.test(values.getIn([postId, 'title']))) {
      errors[postId].title = 'Deve conter somente letras e numeros'
    }

    if (!values.getIn([postId, 'content'])) {
      errors[postId].content = 'Campo obrigatorio'
    }
  }

  return errors
}

function NewPost (props) {

  return (
    <div className={newPostContainer}>
      <Paper className={paperContainer}>
        <form onSubmit={props.handleSubmit}>
          <FormSection name={props.postId}>

            <div className={fieldContainer}>
              <Field name='title' label='Titulo'
                fullWidth={true} component={TextForm} />
            </div>

            <div className={fieldContainer}>
              <Field name='content' label='Conteudo' multiLine={true}
                fullWidth={true} component={TextForm} />
            </div>

            <div className={fieldContainer}>
              <ButtonForm label={'Enviar'} fullWidth={true}
                disabled={props.pristine || props.submitting} />
            </div>

          </FormSection>
        </form>
      </Paper>
    </div>
  )

}

export default reduxForm({form: 'NewPost', validate})(NewPost)
