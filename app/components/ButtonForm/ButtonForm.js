import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default function ButtonForm (props) {

  return (
    <RaisedButton type='submit' label={props.label} fullWidth={props.fullWidth}
      primary={true} disabled={props.disabled} />
  )

}
