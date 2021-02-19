// eslint-disable-next-line @typescript-eslint/naming-convention
export interface userObject {
  email: string
  password: string
}

export const initUser = (): userObject => ({
  email: '',
  password: '',
})
