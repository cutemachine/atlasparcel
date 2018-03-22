import types from './types'

const welcomeTextChanged = text => ({
  type: types.WELCOME_TEXT_CHANGED,
  payload: text
})

export default {
  welcomeTextChanged
}
