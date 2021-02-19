// src/layout/Header/HeaderDrawer.tsx

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import { NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import WebIcon from '@material-ui/icons/Web'
import WebAssetIcon from '@material-ui/icons/WebAsset'
import ListItemText from '@material-ui/core/ListItemText'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import MailIcon from '@material-ui/icons/Mail'
import InfoIcon from '@material-ui/icons/Info'
import IconButton from '@material-ui/core/IconButton'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'
import { ThemeEnum } from '../../model'
import { UserListButton } from '../../components/UserListButton/UserListButton'

const DetectHover = styled.div`
  transition-duration: 0.5s;
  :hover {
    color: grey;
    span {
      opacity: 1;
    }
  }
`

export default class HeaderDrawer extends React.PureComponent<IHDProps, IHDState> {
  constructor(props: IHDProps) {
    super(props)
    this.state = {
      toggleMenuFlag: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleListItemClick = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        toggleMenuFlag: false,
      }
    })
  }

  handleToggle() {
    this.setState((prevState) => {
      const newState = !prevState.toggleMenuFlag
      return {
        ...prevState,
        toggleMenuFlag: newState,
      }
    })
  }

  render() {
    return (
      <>
        <IconButton style={{ color: 'black' }} onClick={this.handleToggle}>
          <DetectHover>
            <MenuIcon fontSize="large" />
          </DetectHover>
        </IconButton>
        <Drawer anchor="left" open={this.state.toggleMenuFlag} onClose={this.handleToggle}>
          <UserListButton isLoggedIn={this.props.isLoggedIn} onClick={this.handleListItemClick} />

          <Divider />

          <List>
            {[
              { name: 'Build My Site', url: '/BuildSiteCourse' },
              { name: 'We Build Site', url: '/YouBuildMySite' },
            ].map((itemObject, index) => (
              <NavLink to={itemObject.url} className="NavLinkItem" key={itemObject.url} activeClassName="NavLinkItem-selected">
                <ListItem button key={itemObject.name} onClick={this.handleListItemClick}>
                  <ListItemIcon>{index % 2 === 0 ? <WebIcon /> : <WebAssetIcon />}</ListItemIcon>
                  <ListItemText primary={itemObject.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
          <Divider />
          <List>
            {[
              { name: 'Coaching Hr', url: '/CoachingHourly' },
              { name: 'Coaching Pkg', url: '/CoachingPackage' },
            ].map((itemObject, index) => (
              <NavLink to={itemObject.url} className="NavLinkItem" key={itemObject.url} activeClassName="NavLinkItem-selected">
                <ListItem button key={itemObject.name} onClick={this.handleListItemClick}>
                  <ListItemIcon>{index % 2 === 0 ? <SupervisorAccountIcon /> : <SupervisedUserCircleIcon />}</ListItemIcon>
                  <ListItemText primary={itemObject.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
          <Divider />
          <List>
            {[
              { name: 'My Books', url: '/Books' },
              { name: 'My Articles', url: '/Articles' },
            ].map((itemObject, index) => (
              <NavLink to={itemObject.url} className="NavLinkItem" key={itemObject.url} activeClassName="NavLinkItem-selected">
                <ListItem button key={itemObject.name} onClick={this.handleListItemClick}>
                  <ListItemIcon>{index % 2 === 0 ? <MenuBookIcon /> : <LibraryBooksIcon />}</ListItemIcon>
                  <ListItemText primary={itemObject.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
          <Divider />
          <NavLink to="/Contact" className="NavLinkItem" key="/Contact" activeClassName="NavLinkItem-selected">
            <ListItem button key="Contact" onClick={this.handleListItemClick}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </NavLink>
          <NavLink to="/About" className="NavLinkItem" key="/About" activeClassName="NavLinkItem-selected">
            <ListItem button key="About" onClick={this.handleListItemClick}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </NavLink>
        </Drawer>
      </>
    )
  }
}

interface IHDProps {
  theme: ThemeEnum
  isLoggedIn: boolean
}

interface IHDState {
  toggleMenuFlag: boolean
}
