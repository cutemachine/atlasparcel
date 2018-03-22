import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button, { ButtonGroup } from '@atlaskit/button'
import MainSection from '../components/MainSection'
import ContentWrapper from '../components/ContentWrapper'
import PageTitle from '../components/PageTitle'
import { uiOperations } from '../state/ui'

class HomePage extends Component {
  static propTypes = {
    showModal: PropTypes.func
  }

  static contextTypes = {
    addFlag: PropTypes.func
  }

  render () {
    return (
      <ContentWrapper>
        <PageTitle>Home</PageTitle>
        <MainSection />
        <ButtonGroup>
          <Button
            appearance='primary'
            onClick={() => this.props.showModal(true)}
            onClose={() => { }}
          >Click to view Atlaskit modal</Button>
          <Button onClick={this.context.addFlag}>Click to view Atlaskit flag</Button>
        </ButtonGroup>
      </ContentWrapper>
    )
  }
}

const mapDispatchToProps = {
  showModal: uiOperations.showModal
}

export default connect(null, mapDispatchToProps)(HomePage)
