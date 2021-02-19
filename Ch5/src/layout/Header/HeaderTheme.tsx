// src/layout/Header/HeaderTheme.tsx

import React, { FunctionComponent, useState } from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import { useMediaQuery } from '@material-ui/core'
import HeaderComponent from './Header'
import store from '../../redux/store'
import { ThemeEnum } from '../../model'

function appBarBackgroundStyle(color: string) {
  return {
    background: color,
  }
}

export const HeaderTheme: FunctionComponent = () => {
  const smallBreakPoint = useMediaQuery('(min-width: 0px) and (max-width: 1100px)')
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Light)
  store.subscribe(() => {
    setTheme(store.getState().preferences.theme)
  })

  return (
    <AppBar position="fixed" style={appBarBackgroundStyle(theme === ThemeEnum.Dark ? '#2b2b2b' : 'white')}>
      <HeaderComponent theme={store.getState().preferences.theme} smallBreakPoint={smallBreakPoint} />
    </AppBar>
  )
}
