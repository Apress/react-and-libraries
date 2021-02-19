// src/layout/Header/HeaderTopNav.tsx

import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import { Link, NavLink } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import styled from 'styled-components'
import { UserButton } from '../../components/UserButton/UserButton'
import { ThemeEnum } from '../../model'

function menuLabelBackgroundStyle(color: string) {
  return {
    color,
    padding: 20,
  }
}

function githubIconStyle(color: string) {
  return {
    color,
    width: 120,
  }
}

const DetectHover = styled.div`
  transition-duration: 0.5s;
  :hover {
    color: grey;
    span {
      opacity: 1;
    }
  }
`

const Nav = styled.nav``

let anchorElement: HTMLButtonElement

export default class HeaderTopNav extends React.PureComponent<IHTNavProps, IHTNState> {
  constructor(props: IHTNavProps) {
    super(props)
    this.state = {
      menuBuildItem1Flag: false,
      menuBuildItem2Flag: false,
      menuBuildItem3Flag: false,
    }
  }

  handleMenuOpen = (event: React.MouseEvent, item: string) => {
    anchorElement = (event as React.MouseEvent<HTMLButtonElement>).currentTarget
    switch (item) {
      case '1':
        this.setState((prevState) => {
          return {
            ...prevState,
            menuBuildItem1Flag: true,
          }
        })
        break
      case '2':
        this.setState((prevState) => {
          return {
            ...prevState,
            menuBuildItem2Flag: true,
          }
        })
        break
      case '3':
        this.setState((prevState) => {
          return {
            ...prevState,
            menuBuildItem3Flag: true,
          }
        })
        break
    }
  }

  handleMenuClose = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        menuBuildItem1Flag: false,
        menuBuildItem2Flag: false,
        menuBuildItem3Flag: false,
      }
    })
  }

  render() {
    return (
      <Nav>
        <Button style={menuLabelBackgroundStyle(this.props.theme === ThemeEnum.Dark ? 'white' : 'black')} onClick={(event) => this.handleMenuOpen(event, '1')}>
          Build My Website
        </Button>
        <Menu id="menu-appbar1" anchorEl={anchorElement} open={this.state.menuBuildItem1Flag} onClose={this.handleMenuClose}>
          {[
            { name: 'Build My Own Site', url: '/BuildSiteCourse' },
            { name: 'You Build My Site', url: '/YouBuildMySite' },
          ].map((itemObject, index) => (
            <NavLink exact to={itemObject.url} className="NavLinkItem" key={itemObject.name}>
              <MenuItem onClick={this.handleMenuClose}>{itemObject.name}</MenuItem>
            </NavLink>
          ))}
        </Menu>

        <Button style={menuLabelBackgroundStyle(this.props.theme === ThemeEnum.Dark ? 'white' : 'black')} onClick={(event) => this.handleMenuOpen(event, '2')}>
          Coaching
        </Button>
        <Menu id="menu-appbar2" anchorEl={anchorElement} getContentAnchorEl={null} open={this.state.menuBuildItem2Flag} onClose={this.handleMenuClose}>
          {[
            { name: 'Hourly', url: '/CoachingHourly' },
            { name: 'Packages', url: '/CoachingPackage' },
          ].map((itemObject, index) => (
            <NavLink exact to={itemObject.url} className="NavLinkItem" key={itemObject.name}>
              <MenuItem onClick={this.handleMenuClose}>{itemObject.name}</MenuItem>
            </NavLink>
          ))}
        </Menu>

        <Button style={menuLabelBackgroundStyle(this.props.theme === ThemeEnum.Dark ? 'white' : 'black')} onClick={(event) => this.handleMenuOpen(event, '3')}>
          Resources
        </Button>
        <Menu id="menu-appbar2" anchorEl={anchorElement} getContentAnchorEl={null} open={this.state.menuBuildItem3Flag} onClose={this.handleMenuClose}>
          {[
            { name: 'Books', url: '/Books' },
            { name: 'Articles', url: '/Articles' },
          ].map((itemObject, index) => (
            <NavLink exact to={itemObject.url} className="NavLinkItem" key={itemObject.name}>
              <MenuItem onClick={this.handleMenuClose}>{itemObject.name}</MenuItem>
            </NavLink>
          ))}
        </Menu>

        <Button component={Link} style={menuLabelBackgroundStyle(this.props.theme === ThemeEnum.Dark ? 'white' : 'black')} to="/Contact">
          Contact
        </Button>

        <UserButton theme={this.props.theme} isLoggedIn={this.props.isLoggedIn} />

        <a href="https://github.com/EliEladElrom/react-tutorials" target="_blank" rel="noopener noreferrer">
          <IconButton style={githubIconStyle(this.props.theme === ThemeEnum.Dark ? 'white' : 'black')}>
            <DetectHover>
              <GitHubIcon fontSize="large" />
            </DetectHover>
          </IconButton>
        </a>
      </Nav>
    )
  }
}

interface IHTNavProps {
  theme: ThemeEnum
  isLoggedIn: boolean
}

interface IHTNState {
  menuBuildItem1Flag: boolean
  menuBuildItem2Flag: boolean
  menuBuildItem3Flag: boolean
}
