/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/components/Toast/Toast.tsx
*/

import React, { Suspense } from 'react'
import './Toast.scss'
import { useRecoilState } from 'recoil'
import { toastState } from '../../recoil/atoms/toastAtoms'
import checkIcon from '../../assets/toast/check.svg'
import errorIcon from '../../assets/toast/error.svg'
import infoIcon from '../../assets/toast/info.svg'
import warningIcon from '../../assets/toast/warning.svg'
import { backgroundColorEnums, initEmptyToast, notificationTypesEnums } from '../../model'

export const Toast = () => {
  const [toast, setToast] = useRecoilState(toastState)
  // Creating a Map for style
  // this can also be done with a switch or object literal
  interface StyleDetails {
    background: string
    icon: string
  }
  const getToastStyle = (toastType: string) => {
    let retVal: StyleDetails = {
      background: backgroundColorEnums.Success,
      icon: checkIcon,
    }
    switch (toastType) {
      case notificationTypesEnums.Fail:
        retVal = {
          background: backgroundColorEnums.Fail,
          icon: errorIcon,
        }
        break
      case notificationTypesEnums.Warning:
        retVal = {
          background: backgroundColorEnums.Warning,
          icon: warningIcon,
        }
        break
      case notificationTypesEnums.Info:
        retVal = {
          background: backgroundColorEnums.Info,
          icon: infoIcon,
        }
        break
    }
    return retVal
  }
  return (
    <>
      {toast.id !== -1 && (
        <Suspense fallback={<span>Loading</span>}>
          <div className="notification-container top-right">
            <div key={toast.id} className="notification toast top-right" style={{ backgroundColor: getToastStyle(toast.type).background }}>
              <button type="button" onClick={() => setToast(initEmptyToast())}>
                X
              </button>
              <div className="notification-image">
                <img src={getToastStyle(toast.type).icon} alt="" />
              </div>
              <div>
                <p className="notification-title">{toast.type}</p>
                <p className="notification-message">{toast.description}</p>
              </div>
            </div>
          </div>
        </Suspense>
      )}
    </>
  )
}
