/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Footer.tsx
*/

import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { List, ListItem } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import InvertColorsIcon from '@material-ui/icons/InvertColors'
import { useStyles } from './Footer.styles'

// Redux Toolkit
import store from '../../redux/store'
import { ThemeEnum } from '../../model'
import { switchTheme } from '../../features/Preferences/preferencesSlice'

function NestedGrid() {
  const classes = useStyles()
  const footerClasses = classNames({
    [classes.footer]: true,
  })
  const aClasses = classNames({
    [classes.a]: true,
  })
  const updatePref = () => {
    store.dispatch(switchTheme(store.getState()))
  }
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {[
              { name: 'Contact', url: '/Contact' },
              { name: 'About', url: '/About' },
              { name: 'Books', url: '/Books' },
              { name: 'Courses', url: '/BuildSiteCourse' },
            ].map((itemObject, index) => (
              <NavLink to={itemObject.url} className={classes.block} key={itemObject.url} activeClassName="NavLinkItem-selected">
                <ListItem className={classes.inlineBlock}>{itemObject.name}</ListItem>
              </NavLink>
            ))}
          </List>
        </div>
        <div className={classes.right}>
          &copy; {new Date().getFullYear()}{' '}
          <button type="submit" onClick={() => updatePref()} className={aClasses}>
            <InvertColorsIcon className={classes.icon} /> Change theme to {store.getState().preferences.theme === ThemeEnum.Dark ? 'light' : 'dark'}
          </button>
        </div>
      </div>
    </footer>
  )
}

const Footer: FunctionComponent<TFooterProps> = ({ theme }) => (
  <nav className={theme === ThemeEnum.Dark ? 'dark' : 'light'}>
    <NestedGrid />
  </nav>
)

export type TFooterProps = {
  theme: ThemeEnum
}

export default Footer
