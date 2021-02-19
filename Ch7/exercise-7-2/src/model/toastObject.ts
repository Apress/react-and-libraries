// src/model/toastObject.ts

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface toastObject {
  id: number
  type: string
  description: string
}
export const initEmptyToast = (): toastObject => ({
  id: -1,
  type: '',
  description: '',
})
export const initToast = (id: number, type: string, description: string): toastObject => ({
  id,
  type,
  description,
})
export const randomToastId = () => {
  return Math.floor(Math.random() * 101 + 1)
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export enum notificationTypesEnums {
  Success = 'Success',
  Fail = 'Fail',
  Info = 'Info',
  Warning = 'Warning',
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export enum backgroundColorEnums {
  Success = '#5bb85a',
  Fail = '#d94948',
  Info = '#55bede',
  Warning = '#f0a54b',
}
