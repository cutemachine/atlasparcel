import types from './types'

const showModal = isOpen => ({
  type: types.SHOW_MODAL,
  payload: isOpen
})

let nextFlagId = 0
const addFlag = (title, description) => ({
  type: types.ADD_FLAG,
  id: ++nextFlagId,
  title,
  description
})

const deleteFlag = (id) => ({
  type: types.DELETE_FLAG,
  id
})

export default {
  showModal,
  addFlag,
  deleteFlag
}
