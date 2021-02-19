import React from 'react'
import { shallow } from 'enzyme'
import BooksPage from './BooksPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/BooksPage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<BooksPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<BooksPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
