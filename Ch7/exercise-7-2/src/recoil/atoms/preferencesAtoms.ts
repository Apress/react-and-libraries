// src/recoil/atoms/preferencesAtoms.ts

import { atom } from 'recoil'
import { initPreferencesObject } from '../../model/preferencesObject'

export const preferencesState = atom({
  key: 'PreferencesState',
  default: initPreferencesObject(),
})
