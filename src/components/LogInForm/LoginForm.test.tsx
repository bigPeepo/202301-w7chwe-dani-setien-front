import { fireEvent, render, screen } from "@testing-library/react";
import LogInForm from "./LogInForm";

describe("Given a logInForm component", () => {
  describe("When is rendered", () => {
    test("Then it should show inputs for 'email' and 'password'", () => {
      render(<LogInForm setHasAccount={jest.fn()} />);

      const emailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");

      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a title 'Sign in'", () => {
      render(<LogInForm setHasAccount={jest.fn()} />);

      const formTitle = screen.getByRole("heading", {
        name: "Sign in",
      });

      expect(formTitle).toBeInTheDocument();
    });

    test("Then it should show a button 'Log in'", () => {
      render(<LogInForm setHasAccount={jest.fn()} />);

      const logInButton = screen.getByRole("button", {
        name: "Login",
      });

      expect(logInButton).toBeInTheDocument();
    });

    test("Then it should show a button 'Register'", () => {
      render(<LogInForm setHasAccount={jest.fn()} />);

      const registerButton = screen.getByRole("button", {
        name: "Register",
      });

      expect(registerButton).toBeInTheDocument();
    });
  });

  describe("When its Register button is clicked", () => {
    test("Then it should call its setHasAccount function with false", () => {
      const mockSetHasAccount = jest.fn();

      render(<LogInForm setHasAccount={mockSetHasAccount} />);

      const registerButton = screen.getByRole("button", {
        name: "Register",
      });

      fireEvent.click(registerButton);

      expect(mockSetHasAccount).toHaveBeenCalledWith(false);
    });
  });
});
