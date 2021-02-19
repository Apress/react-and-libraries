// src/recoil/selectors/userSelectors.ts

import { selector } from 'recoil'
import axios from 'axios'
import * as CryptoJS from 'crypto-js'
import { userState } from '../atoms/userAtoms'

export const submitUserLoginSelector = selector({
  key: 'SubmitUserLoginSelector',
  get: async ({ get }) => {
    const payload = get(userState)
    if (payload.email === '' || payload.password === '') return 'Error: Please complete form'
    try {
      const host = process.env.NODE_ENV === 'development' ? 'http://localhost:8081' : ''
      // console.log(`userSelectors.ts :: submitUserLoginSelector :: process.env.NODE_ENV: ${process.env.NODE_ENV}`)
      const secretPassphrase = 'mySecretPassphrase'
      const passwordEncrypt = CryptoJS.AES.encrypt(payload.password, secretPassphrase)
      const passwordEncryptEncodeURI = encodeURIComponent(passwordEncrypt.toString())
      // console.log('passwordEncryptEncodeURI: ' + passwordEncryptEncodeURI)
      const urlWithString = `${host}/validate?email=${payload.email}&password=${passwordEncryptEncodeURI}`
      // console.log(`userSelectors.ts :: submitUserLoginSelector :: url: ${  urlWithString}`)
      const res = await axios({
        url: urlWithString,
        method: 'get',
      })
      // const status = `${res.data.status}`
      // console.log(`userSelectors.ts :: submitUserLoginSelector :: results: ${JSON.stringify(status)}`)
      return res?.data?.status
    } catch (err) {
      // console.warn(err)
      return `Error: ${err}`
    }
  },
})
