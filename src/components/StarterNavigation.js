import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import Nav, {
  AkContainerTitle,
  AkCreateDrawer,
  AkNavigationItem
} from '@atlaskit/navigation'
import DashboardIcon from '@atlaskit/icon/glyph/dashboard'
import GearIcon from '@atlaskit/icon/glyph/settings'
import CreateIcon from '@atlaskit/icon/glyph/add'
import AtlassianIcon from '@atlaskit/icon/glyph/atlassian'
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left'
import ComponentIcon from '@atlaskit/icon/glyph/component'

import CreateDrawer from '../components/CreateDrawer'
import atlaskitLogo from '../images/atlaskit.png'

export default class StarterNavigation extends React.Component {
  state = {
    navLinks: [
      ['/', 'Home', DashboardIcon],
      ['/commands', 'Commands', GearIcon],
      ['/components', 'Components', ComponentIcon],
      ['/redux', 'Redux', ComponentIcon]
    ]
  }

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object
  }

  static propTypes = {
    location: PropTypes.object
  }

  openDrawer = (openDrawer) => {
    this.setState({ openDrawer })
  }

  shouldComponentUpdate (nextProps, nextContext) {
    return true
  }

  render () {
    const backIcon = <ArrowleftIcon label='Back icon' size='medium' />
    const globalPrimaryIcon = <AtlassianIcon label='Atlassian icon' size='xlarge' />

    return (
      <Nav
        isCollapsible={true}
        isOpen={this.context.navOpenState.isOpen}
        width={this.context.navOpenState.width}
        onResize={this.props.onNavResize}
        containerHeaderComponent={() => (
          <AkContainerTitle
            href='https://github.com/cutemachine/atlasparcel'
            icon={
              <img alt='atlaskit logo' src={atlaskitLogo} />
            }
            text='AtlasParcel'
          />
        )}
        globalPrimaryIcon={globalPrimaryIcon}
        globalPrimaryItemHref='/'
        hasBlanket
        drawers={[
          <AkCreateDrawer
            backIcon={backIcon}
            isOpen={this.state.openDrawer === 'create'}
            key='create'
            onBackButton={() => this.openDrawer(null)}
            primaryIcon={globalPrimaryIcon}
          >
            <CreateDrawer
              onItemClicked={() => this.openDrawer(null)}
            />
          </AkCreateDrawer>
        ]}
        globalCreateIcon={<CreateIcon label='Create icon' />}
        onCreateDrawerOpen={() => this.openDrawer('create')}
      >
        {
          this.state.navLinks.map(link => {
            const [url, title, Icon] = link
            return (
              <Link key={url} to={url}>
                <AkNavigationItem
                  icon={<Icon label={title} size='medium' />}
                  text={title}
                  isSelected={this.props.location.pathname === url}
                />
              </Link>
            )
          }, this)
        }
      </Nav>
    )
  }
}
