// src/recoil/selectors/registerSelectors.ts

import { selector } from 'recoil'
import axios from 'axios'
import * as CryptoJS from 'crypto-js'
import { registerState } from '../atoms/registerAtoms'

export const registerUserSelector = selector({
  key: 'RegisterUserSelector',
  get: async ({ get }) => {
    const payload = get(registerState)
    if (payload.email === '' || payload.password === '' || payload.repeat_password === '' || payload.username === '' || payload.repeat_password !== payload.password) {
      // eslint-disable-next-line no-console
      console.log(`registerSelectors.ts :: registerUserSelector :: ERROR uncompleted form :: ${JSON.stringify(payload)}`)
      return 'Error: Please complete form'
    }
    try {
      // console.log('registerSelectors.ts :: registerUserSelector :: start encrypt')
      const secretPassphrase = 'mySecretPassphrase'
      const passwordEncrypt = CryptoJS.AES.encrypt(payload.password, secretPassphrase)
      const passwordEncryptEncodeURI = encodeURIComponent(passwordEncrypt.toString())
      // console.log('passwordEncryptEncodeURI: ' + passwordEncryptEncodeURI)
      const host = process.env.NODE_ENV === 'development' ? 'http://localhost:8081' : ''
      // console.log(`userSelectors.ts :: submitUserLoginSelector :: process.env.NODE_ENV: ${process.env.NODE_ENV}`)
      const urlWithString = `${host}/register?name=${payload.username.toLowerCase()}&email=${payload.email.toLowerCase()}&password=${passwordEncryptEncodeURI}`
      // eslint-disable-next-line no-console
      console.log(`registerSelectors.ts :: registerUserSelector :: url: ${urlWithString}`)
      const res = await axios({
        url: urlWithString,
        method: 'get',
      })
      // const status = `${res.data.status}`
      // console.log(`userSelectors.ts :: registerUserSelector :: results: ${JSON.stringify(status)}`)
      return res?.data?.status
    } catch (err) {
      // console.warn(err)
      return `Error: ${err}`
    }
  },
})
