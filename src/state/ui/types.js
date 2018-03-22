// Action type names should adhere to the following schema:
// app/domain/ACTION_TYPE
// domain is optional, we use it only in applications / components with many action types
// describe a change that has happend and name accordingly
// Think what was the effect?

const WELCOME_TEXT_CHANGED = 'ui/WELCOME_TEXT_CHANGED'

export default {
  WELCOME_TEXT_CHANGED
}
