import React from 'react'
import TextField from 'material-ui/TextField'

export default function TextForm (props) {
  return (
    <TextField
      disabled={props.isLoading}
      hintText={props.label}
      fullWidth={props.fullWidth}
      multiLine={props.multiLine}
      floatingLabelText={props.label}
      errorText={props.meta.touched && props.meta.error ? props.meta.error : null}
      onChange={(v) => props.input.onChange(v)}
      value={props.input.value}
      {...props.input} />
  )

}
