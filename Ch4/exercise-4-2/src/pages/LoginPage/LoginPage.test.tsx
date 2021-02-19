import React from 'react'
import { shallow } from 'enzyme'
import LoginPage from './LoginPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/LoginPage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<LoginPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<LoginPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
