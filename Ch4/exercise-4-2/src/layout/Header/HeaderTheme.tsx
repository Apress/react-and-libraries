// src/layout/Header/HeaderTheme.tsx

import React, { FunctionComponent } from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import { useMediaQuery } from '@material-ui/core'
import HeaderComponent from './Header'

function appBarBackgroundStyle() {
  return {
    background: '000000',
  }
}

export const HeaderTheme: FunctionComponent = () => {
  const smallBreakPoint = useMediaQuery('(min-width: 0px) and (max-width: 1100px)')
  return (
    <AppBar position="fixed" style={appBarBackgroundStyle()}>
      <HeaderComponent smallBreakPoint={smallBreakPoint} />
    </AppBar>
  )
}
