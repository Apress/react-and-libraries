/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/page/MembersPage/MembersHome.tsx
*/

import Button from '@material-ui/core/Button'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import './MembersPage.scss'
import { sessionState } from '../../recoil/atoms/sessionAtoms'

const MembersHome = () => {
  const setSessionState = useSetRecoilState(sessionState)
  const onClickHandler = (e: React.MouseEvent) => {
    // console.log('Members.tsx :: handleSubmit :: logoutUser')
    e.preventDefault()
    localStorage.removeItem('accessToken')
    setSessionState('')
  }
  return (
    <div className="MembersPage">
      <Button type="submit" variant="contained" color="primary" onClick={onClickHandler}>
        Logout
      </Button>
    </div>
  )
}

export default MembersHome
