import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router'
import Nav, {
  AkContainerTitle,
  AkCreateDrawer,
  AkNavigationItem,
  AkSearchDrawer
} from '@atlaskit/navigation'
import DashboardIcon from '@atlaskit/icon/glyph/dashboard'
import GearIcon from '@atlaskit/icon/glyph/settings'
import SearchIcon from '@atlaskit/icon/glyph/search'
import CreateIcon from '@atlaskit/icon/glyph/add'
import AtlassianIcon from '@atlaskit/icon/glyph/atlassian'
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left'
import ComponentIcon from '@atlaskit/icon/glyph/component'

import CreateDrawer from '../components/CreateDrawer'
import SearchDrawer from '../components/SearchDrawer'
import atlaskitLogo from '../images/atlaskit.png'

export default class StarterNavigation extends React.Component {
  state = {
    navLinks: [
      ['/', 'Home', DashboardIcon],
      ['/commands', 'Commands', GearIcon],
      ['/components', 'Components', ComponentIcon]
    ]
  }

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object
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
        globalSearchIcon={<SearchIcon label='Search icon' />}
        hasBlanket
        drawers={[
          <AkSearchDrawer
            backIcon={backIcon}
            isOpen={this.state.openDrawer === 'search'}
            key='search'
            onBackButton={() => this.openDrawer(null)}
            primaryIcon={globalPrimaryIcon}
          >
            <SearchDrawer
              onResultClicked={() => this.openDrawer(null)}
              onSearchInputRef={(ref) => {
                this.searchInputRef = ref
              }}
            />
          </AkSearchDrawer>,
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
        onSearchDrawerOpen={() => this.openDrawer('search')}
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
                  isSelected={this.context.router.isActive(url, true)}
                />
              </Link>
            )
          }, this)
        }
      </Nav>
    )
  }
}
