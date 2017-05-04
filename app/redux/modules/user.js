import { Map } from 'immutable'
import { authenticate } from 'auth'

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

export function authenticateUser () {
  return async function (dispatch) {
    dispatch(authUser())
    try {
      const user = await authenticate()
      dispatch(authUserSuccess(user))
    } catch (e) {
      console.log(e)
      dispatch(authUserFailure(e))
    }
  }
}

const initialState = Map({
  uid: null,
  isEditor: false,
  createdAt: null,
  isAuthenticated: false,
  isLoading: false,
})

export default function user (state = initialState, action) {
  switch (action.type) {

    case AUTH_USER :
      return state.merge({isLoading: true})

    case AUTH_USER_SUCCESS :
      return state.merge({
        uid: action.user.uid,
        isEditor: action.user.isEditor,
        createdAt: action.user.createdAt,
        isAuthenticated: true,
        isLoading: false,
      })

    case AUTH_USER_FAILURE :
      return state.merge({isLoading: false, isAuthenticated: false, error: action.error})

    default :
      return state
  }
}
