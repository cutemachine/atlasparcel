// Action type names should adhere to the following schema:
// app/domain/ACTION_TYPE
// domain is optional, we use it only in applications / components with many action types
// describe a change that has happend and name accordingly
// Think what was the effect?

const SHOW_MODAL = 'ui/SHOW_MODAL'
const ADD_FLAG = 'ui/ADD_FLAG'
const DELETE_FLAG = 'ui/DELETE_FLAG'

export default {
  SHOW_MODAL,
  ADD_FLAG,
  DELETE_FLAG
}
