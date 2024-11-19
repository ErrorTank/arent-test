import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

const createAuthMock = (overrides = {}) => ({
  user: null,
  isAuthenticated: false,
  login: vi.fn().mockResolvedValue({ success: true }),
  logout: vi.fn(),
  getToken: vi.fn(),
  isLoggingIn: false,
  isLoggingOut: false,
  loginError: null,
  logoutError: null,
  setUser: vi.fn(),
  ...overrides,
});

const mockUseAuth = vi.fn(() => createAuthMock());

vi.mock("../../hooks/useAuth", () => ({
  useAuth: () => mockUseAuth(),
}));

vi.mock("react-router-dom", () => ({
  useHistory: () => ({
    replace: vi.fn(),
  }),
  useLocation: () => ({
    state: { from: { pathname: "/dashboard" } },
  }),
}));

describe("Login", () => {
  it("renders login form", () => {
    render(<Login />);

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("handles form submission correctly", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "password123");
    await user.click(submitButton);

    await waitFor(() => {
      expect(emailInput).toHaveValue("test@example.com");
      expect(passwordInput).toHaveValue("password123");
    });
  });

  it("displays error message when login fails", () => {
    mockUseAuth.mockImplementation(() =>
      createAuthMock({
        loginError: { message: "Invalid credentials" },
      })
    );

    render(<Login />);

    expect(screen.getByText("Invalid credentials")).toBeInTheDocument();
  });

  it("disables form during login process", () => {
    mockUseAuth.mockImplementation(() =>
      createAuthMock({
        isLoggingIn: true,
      })
    );

    render(<Login />);

    expect(screen.getByLabelText(/email/i)).toBeDisabled();
    expect(screen.getByLabelText(/password/i)).toBeDisabled();
    expect(screen.getByRole("button", { name: /logging in/i })).toBeDisabled();
  });
});
