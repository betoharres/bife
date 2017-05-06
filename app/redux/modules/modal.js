export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export function openModal (component) {
  return {
    type: OPEN_MODAL,
    component,
  }
}

export function closeModal () {
  return {
    type: CLOSE_MODAL,
  }
}

const initialState = {
  component: null,
  isOpen: false,
}

export default function modal (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL :
      return {
        component: action.component,
        isOpen: true,
      }

    case CLOSE_MODAL :
      return initialState

    default:
      return state
  }
}
