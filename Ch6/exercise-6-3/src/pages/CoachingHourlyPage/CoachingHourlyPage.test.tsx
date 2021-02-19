import React from 'react'
import { shallow } from 'enzyme'
import CoachingHourlyPage from './CoachingHourlyPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/CoachingHourlyPage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<CoachingHourlyPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<CoachingHourlyPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
