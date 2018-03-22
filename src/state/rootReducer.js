import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import uiReducer, { uiSelectors } from './ui'

const rootReducer = combineReducers({
  routing: routerReducer,
  ui: uiReducer
})

export default rootReducer

// Co-locate selectors with reducers here.
// Selector names should start with 'select'.
export const selectors = {
  // UI state
  selectWelcomeText: state => uiSelectors.selectWelcomeText(state.ui)
}
