import React from 'react'
import { shallow } from 'enzyme'
import MembersPage from './MembersPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/MembersPage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<MembersPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<MembersPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
