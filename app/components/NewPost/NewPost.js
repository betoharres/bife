import React, {PropTypes} from 'react'
import { reduxForm, Field } from 'redux-form/immutable'
import { TextForm, ButtonForm } from 'components'
import Paper from 'material-ui/Paper'

import { newPostContainer, fieldContainer, paperContainer } from './styles.css'

const validate = values => {
  const errors = {}
  if (!values.get('title')) {
    errors.title = 'Campo obrigatorio'
  } else if (values.get('title').length > 50) {
    errors.title = 'Deve conter menos de 50 caracteres'
  } else if (!/\W/g.test(values.get('title'))) {
    errors.title = 'Deve conter somente letras e numeros'
  }

  if (!values.get('body')) {
    errors.body = 'Campo obrigatorio'
  }

  return errors
}

function NewPost (props) {

  return (
    <div className={newPostContainer}>
      <Paper className={paperContainer}>
        <form onSubmit={props.handleSubmit}>

          <div className={fieldContainer}>
            <Field name='title' label='Titulo' fullWidth={true} component={TextForm} />
          </div>

          <div className={fieldContainer}>
            <Field name='body' label='Conteudo' multiLine={true} fullWidth={true} component={TextForm} />
          </div>

          <div className={fieldContainer}>
            <ButtonForm label={'Enviar'} fullWidth={true}
              disabled={props.pristine || props.submitting} />
          </div>
        </form>
      </Paper>
    </div>
  )

}

export default reduxForm({form: 'NewPost'}, validate)(NewPost)
