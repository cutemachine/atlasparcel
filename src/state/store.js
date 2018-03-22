import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import reduxThunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './rootReducer'

export default function configureStore (initialState = {}, history) {
  // routerMiddleware: Syncs the location / URL path to the redux state
  const middlewares = [
    reduxThunk,
    routerMiddleware(history)
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  /* eslint-enable */

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  )
}
