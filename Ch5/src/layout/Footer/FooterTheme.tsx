// src/layout/Footer/FooterTheme.tsx

import React, { FunctionComponent, useState } from 'react'
import { ThemeEnum } from '../../model'
import store from '../../redux/store'
import FooterComponent from './Footer'

export const FooterTheme: FunctionComponent = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Light)
  store.subscribe(() => {
    setTheme(store.getState().preferences.theme)
  })
  return <FooterComponent theme={theme} />
}
