/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Footer.tsx
*/

import React from 'react'
import './Footer.scss'

export default class Footer extends React.PureComponent<IFooterProps, IFooterState> {
  constructor(props: IFooterProps) {
    super(props)
    this.state = {}
  }

  render() {
    return <div className="Footer">Footer</div>
  }
}

interface IFooterProps {
  // TODO
}

interface IFooterState {
  // TODO
}
