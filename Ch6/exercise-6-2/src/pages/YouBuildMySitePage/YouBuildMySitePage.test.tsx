import React from 'react'
import { shallow } from 'enzyme'
import YouBuildMySitePage from './YouBuildMySitePage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/YouBuildMySitePage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<YouBuildMySitePage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<YouBuildMySitePage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
