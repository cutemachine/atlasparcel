import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Route } from 'react-router'
import Flag, { FlagGroup } from '@atlaskit/flag'
import Modal from '@atlaskit/modal-dialog'
import Page from '@atlaskit/page'
import HomePage from './pages/HomePage'
import CommandsPage from './pages/CommandsPage'
import ComponentsPage from './pages/ComponentsPage'
import StarterNavigation from './components/StarterNavigation'
import '@atlaskit/css-reset'

export default class App extends Component {
  state = {
    flags: [],
    isModalOpen: false
  }

  static contextTypes = {
    navOpenState: PropTypes.object,
    children: PropTypes.node
  }

  static propTypes = {
    navOpenState: PropTypes.object,
    location: PropTypes.object,
    onNavResize: PropTypes.func
  }

  static childContextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func
  }

  getChildContext () {
    return {
      showModal: this.showModal,
      addFlag: this.addFlag
    }
  }

  showModal = () => {
    this.setState({ isModalOpen: true })
  }

  hideModal = () => {
    this.setState({ isModalOpen: false })
  }

  addFlag = () => {
    this.setState({ flags: [{ id: Date.now() }].concat(this.state.flags) })
  }

  onFlagDismissed = (dismissedFlagId) => {
    this.setState({
      flags: this.state.flags.filter(flag => flag.id !== dismissedFlagId)
    })
  }

  render () {
    return (
      <div>
        <Page
          navigationWidth={this.context.navOpenState.width}
          navigation={<StarterNavigation location={this.props.location} />}
        >
          <Route exact path='/' component={HomePage} />
          <Route path='/commands' component={CommandsPage} />
          <Route path='/components' component={ComponentsPage} />
        </Page>
        <div>
          <FlagGroup onDismissed={this.onFlagDismissed}>
            {
              this.state.flags.map(flag => (
                <Flag
                  id={flag.id}
                  key={flag.id}
                  title='AtlasParcel'
                  description='… loves you'
                />
              ))
            }
          </FlagGroup>
          {
            this.state.isModalOpen && (
              <Modal
                heading='Candy bar'
                actions={[{ text: 'Exit candy bar', onClick: this.hideModal }]}
                onClose={this.hideModal}
              >
                <p style={{ textAlign: 'center' }}>
                  <img src='http://i.giphy.com/yidUztgRB2w2gtDwL6.gif' alt='Moar cupcakes' />
                </p>
              </Modal>
            )
          }
        </div>
      </div>
    )
  }
}
