import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

// ### DEVNOTE ###
// reference for mocking: https://github.com/nextauthjs/next-auth/discussions/4185#discussioncomment-2397318
jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    // expires: new Date(Date.now() + 2 * 86400).toISOString(),
    access_token: "some basic access token",
    user: { 
      username: "admin",
      email: "admin0001@mailnesia.com" // or we could use faker library
    }
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return {
        data: mockSession
      }
    })
  };
});


// jest.mock('next/image', () => ({
//   __esModule: true,
//   default: (props) => {
//     // eslint-disable-next-line @next/next/no-img-element
//     return <img {...props} alt="img"/>
//   },
// }))

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    // const heading = screen.getByRole('heading', {
    //   name: /welcomec to next\.js!/i,
    // })
    // expect(heading).toBeInTheDocument()
  })
})
