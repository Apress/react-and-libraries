/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/pages/RegisterPage/RegisterPage.tsx
*/
import React, { useState } from 'react'
import './RegisterPage.scss'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import Helmet from 'react-helmet'
import { Centered } from '../../layout/Centered'
import { RegisterForm } from '../../components/Register/RegisterForm'
import { initToast, notificationTypesEnums, randomToastId, initRegister } from '../../model'
import { registerState } from '../../recoil/atoms/registerAtoms'
import { toastState } from '../../recoil/atoms/toastAtoms'
import { registerUserSelector } from '../../recoil/selectors/registerSelectors'
import { sessionState } from '../../recoil/atoms/sessionAtoms'

function SubmitUserFormComponent() {
  // console.log('RegisterPage.tsx :: SubmitUserFormComponent')
  const results = useRecoilValue(registerUserSelector)
  const setSessionState = useSetRecoilState(sessionState)
  const setToastState = useSetRecoilState(toastState)
  const onSuccessRegister = () => {
    localStorage.setItem('accessToken', 'myUniqueToken')
    setSessionState('myUniqueToken')
  }
  const onFailRegister = () => {
    setToastState(initToast(randomToastId(), notificationTypesEnums.Fail, results))
    localStorage.removeItem('accessToken')
    setSessionState('')
  }
  results === 'success' ? onSuccessRegister() : onFailRegister()
  return <div className="RegisterPage">{results === 'success' ? <>Success</> : <>We were unable to register you in please try again. Message: `{results}`</>}</div>
}

const RegisterPage = () => {
  return <RegisterPageInner />
}

function RegisterPageInner(props: IRegisterPageProps) {
  const [userRegisterPageState, setUserRegisterPageState] = useState(initRegister)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useRecoilState(registerState)
  const onRegister = () => {
    // console.log(`RegisterPage.tsx :: onRegister :: userRegisterPageState ::
    // ${JSON.stringify(userRegisterPageState)}`)
    setLoading(true)
    setUser(userRegisterPageState)
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(user))
  }
  const onUpdateRegisterFieldHandler = (name: string, value: string) => {
    // console.log(`RegisterPage.tsx :: Update name: ${name}, value: ${value}`)
    setUserRegisterPageState({
      ...userRegisterPageState,
      [name]: value,
    })
    // console.log(`RegisterPage.tsx :: onUpdateRegisterFieldHandler :: user :: ${JSON.stringify(user)}`)
  }
  return (
    <Centered>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Helmet>
      {loading ? (
        <SubmitUserFormComponent />
      ) : (
        <Card>
          <CardHeader title="Register Form" />
          <CardContent>
            <RegisterForm onRegister={onRegister} onUpdateRegisterField={onUpdateRegisterFieldHandler} registerInfo={userRegisterPageState} loading={loading} />
          </CardContent>
        </Card>
      )}
    </Centered>
  )
}
interface IRegisterPageProps {
  // TODO
}
export default RegisterPage
