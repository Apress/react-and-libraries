/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/page/MembersPage/MembersPage.tsx
*/

import React from 'react'
import './MembersPage.scss'
import { useRecoilValue } from 'recoil'
import LoginPage from '../LoginPage/LoginPage'
import MembersHome from './MembersHome'
import { sessionState } from '../../recoil/atoms/sessionAtoms'

const MembersPage = () => {
  const isMemberHasAccess = useRecoilValue(sessionState) === 'myUniqueToken' || localStorage.getItem('accessToken') === 'myUniqueToken'
  return <MembersPageInner isMemberHasAccess={isMemberHasAccess} />
}

const MembersPageInner = (props: IMembersPageInnerProps) => <>{props.isMemberHasAccess ? <MembersHome /> : <LoginPage />}</>

interface IMembersPageInnerProps {
  isMemberHasAccess: boolean
}

export default MembersPage
