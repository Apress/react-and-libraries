import React from 'react'
import { shallow } from 'enzyme'
import CoachingPackagePage from './CoachingPackagePage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/CoachingPackagePage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<CoachingPackagePage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<CoachingPackagePage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
