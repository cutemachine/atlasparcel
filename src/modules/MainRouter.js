import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import { Router, Route, browserHistory } from 'react-router'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import App from './App'
import HomePage from '../pages/HomePage'
import CommandsPage from '../pages/CommandsPage'
import ComponentsPage from '../pages/ComponentsPage'

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
        <div>
          <Route component={this.appWithPersistentNav()} />
          <Route exact path='/' component={HomePage} />
          <Route path='/commands' component={CommandsPage} />
          <Route path='/components' component={ComponentsPage} />
        </div>
      </BrowserRouter>
    )
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object
}
