/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/page/ContactPage/ContactPage.tsx
*/

import React from 'react'
import './ContactPage.scss'
import { RouteComponentProps } from 'react-router-dom'

export default class ContactPage extends React.PureComponent<IContactPageProps, IContactPageState> {
  constructor(props: IContactPageProps) {
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

  static getDerivedStateFromProps: React.GetDerivedStateFromProps<IContactPageProps, IContactPageState> = (props: IContactPageProps, state: IContactPageState) => {
    // invoked right before calling the render method, both on the initial mount and on subsequent updates
    // return an object to update the state, or null to update nothing.
    return null
  }

  public getSnapshotBeforeUpdate(prevProps: IContactPageProps, prevState: IContactPageState) {
    // invoked right before the most recently rendered output is committed
    // A snapshot value (or null) should be returned.
    return null
  }

  componentDidUpdate(prevProps: IContactPageProps, prevState: IContactPageState, snapshot: IContactPageSnapshot) {
    // invoked immediately after updating occurs. This method is not called for the initial render.
    // will not be invoked if shouldComponentUpdate() returns false.
  }

  render() {
    return <div className="ContactPage">{this.state.name} Component</div>
  }
}

interface IContactPageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IContactPageState {
  name: string
}

interface IContactPageSnapshot {
  // TODO
}
