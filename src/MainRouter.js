import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'

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
      <BrowserRouter>
        <Route component={this.appWithPersistentNav()} />
      </BrowserRouter>
    )
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object
}
