import React from 'react'
import { shallow } from 'enzyme'
import RegisterPage from './RegisterPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/RegisterPage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<RegisterPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<RegisterPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
