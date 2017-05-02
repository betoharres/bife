import React, {PropTypes} from 'react'
import TextField from 'material-ui/TextField'

export default function TextForm (props) {
  return (
    <TextField
      hintText={props.label}
      fullWidth={props.fullWidth}
      multiLine={props.multiLine}
      floatingLabelText={props.label}
      errorText={props.meta.touched && props.meta.error}
      onChange={(v) => props.input.onChange(v)}
      value={props.input.value} />
  )

}
