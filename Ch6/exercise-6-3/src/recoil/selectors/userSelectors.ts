// src/recoil/selectors/userSelectors.ts

import { selector } from 'recoil'
import axios from 'axios'
import { userState } from '../atoms/userAtoms'

export const submitUserLoginSelector = selector({
  key: 'SubmitUserLoginSelector',
  get: async ({ get }) => {
    const payload = get(userState)
    if (payload.email === '' || payload.password === '') return 'Error: Please complete form'
    try {
      const urlWithString = `http://localhost:8081/validate?email=${payload.email}&password=${payload.password}`
      const res = await axios({
        url: urlWithString,
        method: 'get',
      })
      // const status = `${res.data.status}`
      // console.log(`userSelectors.ts :: submitUserLoginSelector :: results: ${  JSON.stringify(status)}`)
      return res?.data?.status
    } catch (err) {
      // console.warn(err)
      return `Error: ${err}`
    }
  },
})
