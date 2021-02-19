/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: UserButton.tsx
*/

import React from 'react'
import './UserButton.scss'
import Button from '@material-ui/core/Button/Button'
import { Link } from 'react-router-dom'
import { ThemeEnum } from '../../model'

const menuLabelsLight = {
  color: 'white',
  padding: 20,
}

const menuLabelsDark = {
  color: 'black',
  padding: 20,
}

export class UserButton extends React.PureComponent<IUserButtonProps, {}> {
  render() {
    const { isLoggedIn } = this.props
    return isLoggedIn ? (
      <Button component={Link} style={this.props.theme === ThemeEnum.Dark ? menuLabelsLight : menuLabelsDark} to="/Members">
        Members
      </Button>
    ) : (
      <Button component={Link} style={this.props.theme === ThemeEnum.Dark ? menuLabelsLight : menuLabelsDark} to="/Members">
        Login
      </Button>
    )
  }
}

export interface IUserButtonProps {
  isLoggedIn: boolean
  theme: ThemeEnum
}
