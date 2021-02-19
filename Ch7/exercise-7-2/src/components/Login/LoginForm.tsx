/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/components/Login/LoginForm.tsx
*/

import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { userObject } from '../../model'
import styles from './LoginForm.styles'

const LoginFormInner: React.FunctionComponent<ILoginFormProps> = (props: ILoginFormProps) => {
  const onTextFieldChangeHandler = (fieldId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onUpdateLoginField(fieldId, e.target.value)
  }

  return (
    <div className={props.classes.container}>
      <TextField label="email address" margin="normal" value={props.loginInfo.email} onChange={onTextFieldChangeHandler('email')} />
      <TextField label="password" type="password" margin="normal" value={props.loginInfo.password} onChange={onTextFieldChangeHandler('password')} />
      <Button variant="contained" color="primary" disabled={props.loading} onClick={props.onLogin}>
        Login
        {props.loading && <CircularProgress size={30} color="secondary" />}
      </Button>
    </div>
  )
}
interface ILoginFormProps extends WithStyles<typeof styles> {
  onLogin: () => void
  onUpdateLoginField: (name: string, value: string) => void
  loginInfo: userObject
  loading: boolean
}
export const LoginForm = withStyles(styles)(LoginFormInner)
