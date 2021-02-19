// src/model/preferencesObject.ts

export enum ThemeEnum {
  Dark = 'dark',
  Light = 'light',
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface preferencesObject {
  theme: ThemeEnum
}

export const initPreferencesObject = (): preferencesObject => ({
  theme: ThemeEnum.Light,
})
