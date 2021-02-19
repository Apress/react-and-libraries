// src/layout/Header/HeaderTheme.tsx

import React, { FunctionComponent } from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import { useRecoilState } from 'recoil'
import { useMediaQuery } from '@material-ui/core'
import HeaderComponent from './Header'

import { preferencesState } from '../../recoil/atoms/preferencesAtoms'
import { ThemeEnum } from '../../model'
import { sessionState } from '../../recoil/atoms/sessionAtoms'

function appBarBackgroundStyle(color: string) {
  return {
    background: color,
  }
}

export const HeaderTheme: FunctionComponent = () => {
  const [preferences] = useRecoilState(preferencesState)
  const [session] = useRecoilState(sessionState)
  const smallBreakPoint = useMediaQuery('(min-width: 0px) and (max-width: 1100px)')
  return (
    <AppBar position="fixed" style={appBarBackgroundStyle(preferences.theme === ThemeEnum.Dark ? '#2b2b2b' : 'white')}>
      <HeaderComponent theme={preferences.theme} session={session} smallBreakPoint={smallBreakPoint} />
    </AppBar>
  )
}
