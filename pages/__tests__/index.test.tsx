import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../index";

// ### DEVNOTE ###
// reference for mocking: https://github.com/nextauthjs/next-auth/discussions/4185#discussioncomment-2397318
jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual("next-auth/react");
  const mockSession = {
    // expires: new Date(Date.now() + 2 * 86400).toISOString(),
    access_token: "some basic access token",
    user: {
      username: "admin",
      email: "admin0001@mailnesia.com", // or we could use faker library
    },
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return {
        data: mockSession,
      };
    }),
  };
});

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });


  it("renders a heading", () => {
    const button = screen.getByText("Sign out");
    fireEvent.click(button);
    expect(
      screen.getByRole("button", {
        name: /Sign out/i,
      })
    ).toBeInTheDocument();
  });

  it("Click me to log something!", () => {
    const button = screen.getByRole("button", {
      name: /Click me to log something!/i,
    });
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
