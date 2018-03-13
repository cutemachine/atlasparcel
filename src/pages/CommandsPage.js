import React, { Component } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import PageTitle from '../components/PageTitle'

export default class CommandsPage extends Component {
  render () {
    return (
      <ContentWrapper>
        <PageTitle>Commands</PageTitle>
        <h2>Start</h2>
        <p>You can start a development server with …</p>
        <pre>yarn start</pre>
        <h2>Build & Deploy</h2>
        <p>You can build the project with the build command.</p>
        <pre>yarn build</pre>
        <p>This will create a folder named dist. If you have Netlify installed, you can deploy your application to Netlify with the following command.</p>
        <pre>netlify deploy</pre>
        <h2>Lint</h2>
        <p>You can lint the project's source code with the following command.</p>
        <pre>yarn lint</pre>
        <h2>Fixing Linter Errors</h2>
        <p>You can fix linter errors with the following command.</p>
        <pre>yarn lint-fix</pre>
      </ContentWrapper>
    )
  }
}
