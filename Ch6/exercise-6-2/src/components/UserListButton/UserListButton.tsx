/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: templates/UserListButton/UserListButton.tsx
*/

import React, { MouseEventHandler } from 'react'
import { NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import CardMembershipIcon from '@material-ui/icons/CardMembership'

export class UserListButton extends React.PureComponent<IUserListButtonProps, {}> {
  render() {
    const { isLoggedIn } = this.props
    return isLoggedIn ? (
      <NavLink to="/Members" className="NavLinkItem" key="/Members" activeClassName="NavLinkItem-selected">
        <ListItem button key="Members" onClick={this.props.onClick}>
          <ListItemIcon>
            <CardMembershipIcon />
          </ListItemIcon>
          <ListItemText primary="Members" />
        </ListItem>
      </NavLink>
    ) : (
      <NavLink to="/Members" className="NavLinkItem" key="/Members" activeClassName="NavLinkItem-selected">
        <ListItem button key="Login" onClick={this.props.onClick}>
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </NavLink>
    )
  }
}

export interface IUserListButtonProps {
  isLoggedIn: boolean
  onClick: MouseEventHandler
}
