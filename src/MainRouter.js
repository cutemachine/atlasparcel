import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Route } from 'react-router'
import App from './App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from './state/store'

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const initialState = {}
const store = configureStore(initialState, history)

export default class MainRouter extends Component {
  constructor () {
    super()
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 304
      }
    }
  }

  getChildContext () {
    return {
      navOpenState: this.state.navOpenState
    }
  }

  appWithPersistentNav = () => (props) => (
    <App
      onNavResize={this.onNavResize}
      {...props}
    />
  )

  onNavResize = (navOpenState) => {
    this.setState({
      navOpenState
    })
  }

  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route component={this.appWithPersistentNav()} />
        </ConnectedRouter>
      </Provider>
    )
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object
}
