import types from './types'

const INITIAL_STATE = {
  isModalOpen: false,
  flags: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, isModalOpen: action.payload }

    case types.ADD_FLAG:
      return {
        ...state,
        flags: [
          ...state.flags,
          {
            id: action.id,
            title: action.title,
            description: action.description
          }
        ]
      }

    case types.DELETE_FLAG:
      return {
        ...state,
        flags: state.flags.filter((item) => item.id !== action.id)
      }

    default:
      return state
  }
}
