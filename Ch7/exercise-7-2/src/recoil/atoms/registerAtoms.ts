// src/recoil/atoms/regsiterAtoms.ts
import { atom } from 'recoil'
import { initRegister } from '../../model'

export const registerState = atom({
  key: 'RegisterState',
  default: initRegister(),
})
