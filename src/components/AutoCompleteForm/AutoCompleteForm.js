import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'

export default function AutoCompleteForm (props) {

  const templates = ['youtube', 'xvideos', 'pornhub', 'img', 'redtube', 'youjizz']

  return (
    <AutoComplete
      floatingLabelText="Type 'r', case insensitive"
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={templates}
    />
  )

}
