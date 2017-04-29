import { Map } from 'immutable'

export const AUTH_USER = 'AUTH_USER'
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS'
export const AUTH_USER_FAILURE = 'AUTH_USER_FAILURE'

export function authUser () {
  return {
    type: AUTH_USER,
  }
}

export function authUserSuccess (user) {
  return {
    type: AUTH_USER_SUCCESS,
    user,
  }
}

export function authUserFailure (error) {
  return {
    type: AUTH_USER_FAILURE,
    error,
  }
}

const initialState = Map({
  uid: null,
  editor: false,
  createdAt: null,
  isLoading: false,
})

export default function user (state = initialState, action) {
  switch (action.type) {

    case AUTH_USER :
      return state.merge({isLoading: false})

    case AUTH_USER :
      return state.merge({
        uid: action.uid,
        editor: action.editor,
        createdAt: action.createdAt,
        isLoading: false,
      })

    case AUTH_USER_FAILURE :
      return state.merge({error: action.error})

    default :
      return state
  }
}
