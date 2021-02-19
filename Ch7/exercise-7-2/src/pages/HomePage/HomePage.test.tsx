import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './HomePage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/HomePage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<HomePage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<HomePage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
