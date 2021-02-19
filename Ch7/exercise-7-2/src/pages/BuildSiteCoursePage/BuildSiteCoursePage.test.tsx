import React from 'react'
import { shallow } from 'enzyme'
import BuildSiteCoursePage from './BuildSiteCoursePage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/BuildSiteCoursePage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<BuildSiteCoursePage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<BuildSiteCoursePage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
