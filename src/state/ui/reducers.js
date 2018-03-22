import types from './types'

const INITIAL_STATE = {
  text: 'Welcome to AtlasParcel',
  isAuthorised: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.WELCOME_TEXT_CHANGED:
      return { ...state, text: action.payload }

    default:
      return state
  }
}
