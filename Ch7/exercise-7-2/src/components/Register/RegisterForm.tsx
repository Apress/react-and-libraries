/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/components/Register/RegisterForm.tsx
*/

import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './RegisterForm.styles'
import { registerObject } from '../../model'

const RegisterFormInner: React.FunctionComponent<IRegisterFormProps> = (props: IRegisterFormProps) => {
  const onTextFieldChangeHandler = (fieldId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onUpdateRegisterField(fieldId, e.target.value)
  }

  return (
    <div className={props.classes.container}>
      <TextField label="username" margin="normal" value={props.registerInfo.username} onChange={onTextFieldChangeHandler('username')} />
      <TextField label="email address" margin="normal" value={props.registerInfo.email} onChange={onTextFieldChangeHandler('email')} />
      <TextField label="password" type="password" margin="normal" value={props.registerInfo.password} onChange={onTextFieldChangeHandler('password')} />
      <TextField label="repeat password" type="password" margin="normal" value={props.registerInfo.repeat_password} onChange={onTextFieldChangeHandler('repeat_password')} />
      <Button variant="contained" color="primary" disabled={props.loading} onClick={props.onRegister}>
        Register
        {props.loading && <CircularProgress size={30} color="secondary" />}
      </Button>
    </div>
  )
}
interface IRegisterFormProps extends WithStyles<typeof styles> {
  onRegister: () => void
  onUpdateRegisterField: (name: string, value: string) => void
  registerInfo: registerObject
  loading: boolean
}
export const RegisterForm = withStyles(styles)(RegisterFormInner)
