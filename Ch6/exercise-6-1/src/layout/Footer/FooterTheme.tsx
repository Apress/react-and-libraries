// src/layout/Footer/FooterTheme.tsx

import React, { FunctionComponent } from 'react'
import { useRecoilState } from 'recoil'
import FooterComponent from './Footer'

import { preferencesState } from '../../recoil/atoms/preferencesAtoms'

export const FooterTheme: FunctionComponent = () => {
  const [preferences] = useRecoilState(preferencesState)
  return <FooterComponent theme={preferences.theme} />
}
