/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/components/Toast/ToastNotification.tsx
*/

import React from 'react'
import './ToastNotification.scss'
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'
import { initEmptyToast, toastObject } from '../../model'
import { toastState } from '../../recoil/atoms/toastAtoms'
import { Toast } from './Toast'

// wrapper
export default function ToastNotification() {
  const setToastState = useSetRecoilState(toastState)
  const getToastState: toastObject = useRecoilValue(toastState)
  return <ToastNotInner setToastState={setToastState} getToastState={getToastState} />
}

class ToastNotInner extends React.PureComponent<IToastNotProps, IToastNotState> {
  componentDidUpdate() {
    const interval = setInterval(() => {
      if (this.props.getToastState.id !== -1) {
        this.props.setToastState(initEmptyToast())
      }
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }

  render() {
    return (
      <>
        <Toast />
      </>
    )
  }
}

interface IToastNotProps {
  setToastState: SetterOrUpdater<toastObject>
  getToastState: toastObject
}

interface IToastNotState {}
