/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Header.tsx
*/

import React from 'react'
import './Header.scss'

export default class Header extends React.PureComponent<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props)
    this.state = {}
  }

  render() {
    return <>Header</>
  }
}

interface IHeaderProps {
  // TODO
}

interface IHeaderState {
  // TODO
}
