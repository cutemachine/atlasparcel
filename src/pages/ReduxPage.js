import React, { Component } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import PageTitle from '../components/PageTitle'
import imageURL from '../images/AtlasParcelReduxDevTools.png'

class ReduxPage extends Component {
  render () {
    return (
      <ContentWrapper>
        <PageTitle>Redux</PageTitle>
        <section style={{marginBottom: '10px'}}>
          <p>This starter utilizes Redux for state management.</p>
          <p>
            Some of the UI state of this starter is already wired up with Redux.
            For example, there is a router object in the Redux store where one can see the current location.
            Furthermore, you can control the Modal on the HomePage and the Flag components.
          </p>
          <p>
            If you have the <a href='https://github.com/zalmoxisus/redux-devtools-extension'>redux-devtools-extension</a> installed in your browser,
            you can easily take a peek into the Redux store.
          </p>
          <br />
          <img style={{ maxHeight: '400px', border: '2px solid #174AA0' }} src={imageURL} alt='Starter With Redux DevTools' />
        </section>
      </ContentWrapper>
    )
  }
}

export default ReduxPage
