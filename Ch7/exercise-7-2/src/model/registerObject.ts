// eslint-disable-next-line @typescript-eslint/naming-convention
export interface registerObject {
  username: string
  email: string
  password: string
  repeat_password: string
}

export const initRegister = (): registerObject => ({
  username: '',
  email: '',
  password: '',
  repeat_password: '',
})
