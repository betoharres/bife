import React from 'react'

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export function openModal (Component) {
  return {
    type: OPEN_MODAL,
    Component,
  }
}

export function closeModal () {
  return {
    type: CLOSE_MODAL,
  }
}

const initialState = {
  Component: () => <span />,
  isOpen: false,
}

export default function modal (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL :
      return {
        Component: action.Component,
        isOpen: true,
      }

    case CLOSE_MODAL :
      return initialState

    default:
      return state
  }
}
