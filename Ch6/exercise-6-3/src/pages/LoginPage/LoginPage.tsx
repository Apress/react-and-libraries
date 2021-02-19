/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/pages/LoginPage/LoginPage.tsx
*/
import React, { useState } from 'react'
import './LoginPage.scss'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Centered } from '../../layout/Centered'
import { LoginForm } from '../../components/Login/LoginForm'
import { initToast, initUser, notificationTypesEnums, randomToastId } from '../../model'
import { userState } from '../../recoil/atoms/userAtoms'
import { toastState } from '../../recoil/atoms/toastAtoms'
import { submitUserLoginSelector } from '../../recoil/selectors/userSelectors'
import { sessionState } from '../../recoil/atoms/sessionAtoms'

function SubmitUserFormComponent() {
  const results = useRecoilValue(submitUserLoginSelector)
  const setSessionState = useSetRecoilState(sessionState)
  const setToastState = useSetRecoilState(toastState)
  const onSuccessLogin = () => {
    localStorage.setItem('accessToken', 'myUniqueToken')
    setSessionState('myUniqueToken')
  }
  const onFailLogin = () => {
    setToastState(initToast(randomToastId(), notificationTypesEnums.Fail, results))
    localStorage.removeItem('accessToken')
    setSessionState('')
  }
  results === 'success' ? onSuccessLogin() : onFailLogin()
  return <>{results === 'success' ? <>Success</> : <>We were unable to log you in please try again</>}</>
}

const LoginPage = () => {
  return <LoginPageInner />
}

function LoginPageInner() {
  const [userLoginPageState, setUserLoginPageState] = useState(initUser)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useRecoilState(userState)
  const onLogin = () => {
    // console.log(`LoginPage.tsx :: onLogin :: userLoginPageState :: ${JSON.stringify(userLoginPageState)}`)
    setLoading(true)
    setUser(userLoginPageState)
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(user))
  }
  const onUpdateLoginFieldHandler = (name: string, value: string) => {
    // console.log(`LoginPage.tsx :: Update name: ${name}, value: ${value}`)
    setUserLoginPageState({
      ...userLoginPageState,
      [name]: value,
    })
    // console.log(`LoginPage.tsx :: onUpdateLoginFieldHandler :: user :: ${JSON.stringify(user)}`)
  }
  return (
    <Centered>
      {loading ? (
        <SubmitUserFormComponent />
      ) : (
        <Card>
          <CardHeader title="Members Login" />
          <CardContent>
            <LoginForm onLogin={onLogin} onUpdateLoginField={onUpdateLoginFieldHandler} loginInfo={userLoginPageState} loading={loading} />
          </CardContent>
        </Card>
      )}
    </Centered>
  )
}
export default LoginPage
