import { fromJS } from 'immutable'
import { persistPost, getPosts, deletePost } from '../../api'

export const LOADING_POSTS = 'LOADING_POSTS'
export function loadingPosts () {
  return {
    type: LOADING_POSTS,
  }
}

export const LOADING_POSTS_SUCCESS = 'LOADING_POSTS_SUCCESS'
export function loadingPostsSuccess (posts) {
  return {
    type: LOADING_POSTS_SUCCESS,
    posts,
  }
}

export const LOADING_POSTS_FAILURE = 'LOADING_POSTS_FAILURE'
export function loadingPostsFailure (error) {
  return {
    type: LOADING_POSTS_FAILURE,
    error,
  }
}

export const ADD_POST = 'ADD_POST'
export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export const REMOVE_POST = 'REMOVE_POST'
export function removePost (postId) {
  return {
    type: REMOVE_POST,
    postId,
  }
}

export function fetchPosts () {
  return async function (dispatch) {
    dispatch(loadingPosts())
    try {
      const posts = await getPosts()
      dispatch(addPost(posts))
      dispatch(loadingPostsSuccess())
    } catch (e) {
      dispatch(loadingPostsFailure(e))
    }
  }
}

export function savePost (post) {
  return async function (dispatch) {
    dispatch(loadingPosts())
    try {
      dispatch(addPost(post))
      await persistPost(post.keySeq().first())
      dispatch(loadingPostsSuccess())
    } catch (e) {
      removePost(post)
      dispatch(loadingPostsFailure(e))
    }
  }
}

export function deletePostRequest (postId) {
  return async function (dispatch) {
    dispatch(loadingPosts())
    try{
      await deletePost(postId)
      dispatch(removePost(postId))
      dispatch(loadingPostsSuccess())
    } catch (e) {
      dispatch(loadingPostsFailure(e))
    }
  }
}

const initialState = fromJS({
  status: {
    lastUpdated: 0,
    isLoading: false,
    errors: '',
  }
})

export default function posts (state = initialState, action) {
  switch (action.type) {

    case LOADING_POSTS :
      return state.mergeIn(['status', 'isLoading'], true)

    case LOADING_POSTS_FAILURE :
      return state.mergeDeep({
        status: {
          isLoading: false,
          errors: action.error,
        }
      })

    case LOADING_POSTS_SUCCESS :
      return state.mergeDeep({
        status: {
          isLoading: false,
          errors: '',
          lastUpdated: new Date().getTime(),
        }
      })

    case ADD_POST :
      return state.merge(action.post)

    case REMOVE_POST :
      return state.delete(action.postId)

    default :
      return state
  }
}
