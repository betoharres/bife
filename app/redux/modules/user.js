import { Map } from 'immutable'
const initialState = Map({
  uid: null,
  editor: false,
  createdAt: null,
})

export default function user (state = initialState, action) {
  switch (action.type) {

    default :
      return state
  }
}
