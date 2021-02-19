// src/layout/Footer/Footer.tsx

import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { List, ListItem } from '@material-ui/core'
import InvertColorsIcon from '@material-ui/icons/InvertColors'
import { useRecoilState } from 'recoil'
import { NavLink } from 'react-router-dom'
import { useStyles } from './Footer.styles'
import { preferencesState } from '../../recoil/atoms/preferencesAtoms'
import { ThemeEnum } from '../../model'

function NestedGrid() {
  const [preferences, setPreferences] = useRecoilState(preferencesState)
  const classes = useStyles()
  const footerClasses = classNames({
    [classes.footer]: true,
  })
  const aClasses = classNames({
    [classes.a]: true,
  })
  const updatePref = () => {
    setPreferences({
      theme: preferences.theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light,
    })
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
          <button type="button" onClick={() => updatePref()} className={aClasses}>
            <InvertColorsIcon className={classes.icon} /> Change theme to {preferences.theme === ThemeEnum.Dark ? 'light' : 'dark'}
          </button>
          &#8239; Built By <a href="https://www.linkedin.com/in/eladelrom/">Eli</a> using <a href="https://github.com/EliEladElrom/cra-template-must-have-libraries">CRA-MHL</a>
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
