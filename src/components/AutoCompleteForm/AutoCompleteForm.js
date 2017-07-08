import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'

export default function AutoCompleteForm (props) {

  const templates = {'youtube': '', 'img': ''}

  return (
    <AutoComplete
      fullWidth={true}
      floatingLabelText="autocomplete"
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={Object.keys(templates)}
    />
  )

}
