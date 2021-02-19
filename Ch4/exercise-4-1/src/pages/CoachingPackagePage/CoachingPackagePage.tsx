/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/page/CoachingPackagePage/CoachingPackagePage.tsx
*/

import React from 'react'
import './CoachingPackagePage.scss'
import { RouteComponentProps } from 'react-router-dom'

export default class CoachingPackagePage extends React.PureComponent<ICoachingPackagePageProps, ICoachingPackagePageState> {
  constructor(props: ICoachingPackagePageProps) {
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

  static getDerivedStateFromProps: React.GetDerivedStateFromProps<ICoachingPackagePageProps, ICoachingPackagePageState> = (props: ICoachingPackagePageProps, state: ICoachingPackagePageState) => {
    // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    return null
  }

  public getSnapshotBeforeUpdate(prevProps: ICoachingPackagePageProps, prevState: ICoachingPackagePageState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: ICoachingPackagePageProps, prevState: ICoachingPackagePageState, snapshot: ICoachingPackagePageSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    return <div className="CoachingPackagePage">{this.state.name} Component</div>
  }
}

interface ICoachingPackagePageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface ICoachingPackagePageState {
  name: string
}

interface ICoachingPackagePageSnapshot {
  // TODO
}
