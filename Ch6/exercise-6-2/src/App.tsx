// src/App.tsx

import React from 'react'
import './App.scss'
import { useSetRecoilState } from 'recoil'
import { toastState } from './recoil/atoms/toastAtoms'
import { initToast, notificationTypesEnums, randomToastId } from './model'

function App() {
  const setToastState = useSetRecoilState(toastState)
  setToastState(initToast(randomToastId(), notificationTypesEnums.Success, 'Hello World'))
  return (
    <div className="App">
      <div>App page</div>
    </div>
  )
}

export default App
