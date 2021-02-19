/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/page/HomePage/HomePage.tsx
*/

import React from 'react'
import './HomePage.scss'
import { RouteComponentProps } from 'react-router-dom'

export default class HomePage extends React.PureComponent<IHomePageProps, IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props)
    this.state = {
      name: this.props.history.location.pathname.substring(1, this.props.history.location.pathname.length).replace('/', ''),
    }
  }

  // If you need 'shouldComponentUpdate' -> Refactor to React.Component
  // Read more about component lifecycle in the official docs:
  // https://reactjs.org/docs/react-component.html

  /*
  public shouldComponentUpdate(nextProps: IMyPageProps, nextState: IMyPageState) {
    // invoked before rendering when new props or state are being received.
    return true // or prevent rendering: false
  } */

  static getDerivedStateFromProps: React.GetDerivedStateFromProps<IHomePageProps, IHomePageState> = (props: IHomePageProps, state: IHomePageState) => {
    // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    return null
  }

  public getSnapshotBeforeUpdate(prevProps: IHomePageProps, prevState: IHomePageState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: IHomePageProps, prevState: IHomePageState, snapshot: IHomePageSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    return <div className="HomePage">{this.state.name} Component</div>
  }
}

interface IHomePageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IHomePageState {
  name: string
}

interface IHomePageSnapshot {
  // TODO
}
