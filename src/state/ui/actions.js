import types from './types'

const showModal = isOpen => ({
  type: types.SHOW_MODAL,
  payload: isOpen
})

export default {
  showModal
}
