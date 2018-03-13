import React, { Component } from 'react'
import Avatar from '@atlaskit/avatar'
import ContentWrapper from '../components/ContentWrapper'
import PageTitle from '../components/PageTitle'
import Button from '@atlaskit/button'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import styled from 'styled-components'

const ComponentTitle = styled.h2`
  margin-bottom: 1em;
  border-bottom: 1px solid lightgrey;
`

export default class CommandsPage extends Component {
  render () {
    return (
      <ContentWrapper>
        <Page>
          <PageTitle>Components</PageTitle>
          <ComponentTitle>Avatar</ComponentTitle>
          <Grid>
            <GridColumn medium={4}>
              <Avatar name='xlarge' size='xlarge' presence='online' />
            </GridColumn>
            <GridColumn medium={4}>
              <Avatar name='xxlarge' size='xxlarge' />
            </GridColumn>
          </Grid>
          <ComponentTitle>Button</ComponentTitle>
          <Grid>
            <GridColumn medium={2}>
              <Button appearance='default'>Default</Button>
            </GridColumn>
            <GridColumn medium={2}>
              <Button appearance='primary'>Primary</Button>
            </GridColumn>
            <GridColumn medium={2}>
              <Button appearance='warning'>Warning</Button>
            </GridColumn>
            <GridColumn medium={2}>
              <Button appearance='danger'>Danger</Button>
            </GridColumn>
            <GridColumn medium={2}>
              <Button appearance='link'>Link</Button>
            </GridColumn>
          </Grid>
          <ComponentTitle>More Atlas Components</ComponentTitle>
          <p>You can find all components included in Atlaskit on the <a href='http://atlaskit.atlassian.com/packages'>packages page</a>.</p>
        </Page>
      </ContentWrapper>
    )
  }
}
