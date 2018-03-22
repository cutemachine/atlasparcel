import types from './types'

const INITIAL_STATE = {
  isModalOpen: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, isModalOpen: action.payload }

    default:
      return state
  }
}
