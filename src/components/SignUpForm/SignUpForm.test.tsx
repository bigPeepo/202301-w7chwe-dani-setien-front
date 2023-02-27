import { fireEvent, render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

describe("Given a SignUpForm component", () => {
  describe("When is rendered", () => {
    test("Then it should show inputs for 'Email', 'Username', 'Password' and 'Avatar'", () => {
      render(<SignUpForm onSubmit={jest.fn()} />);

      const emailInput = screen.getByLabelText("Email");
      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const avatarInput = screen.getByLabelText("Avatar");

      expect(emailInput).toBeInTheDocument();
      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(avatarInput).toBeInTheDocument();
    });

    test("Then it should show a title 'Register'", () => {
      render(<SignUpForm onSubmit={jest.fn()} />);

      const formTitle = screen.getByRole("heading", {
        name: "Register",
      });

      expect(formTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Register' button", () => {
      render(<SignUpForm onSubmit={jest.fn()} />);

      const registerButton = screen.getByRole("button", {
        name: "Register",
      });

      expect(registerButton).toBeInTheDocument();
    });
  });
});

describe("When its form is submitted", () => {
  test("Then it should call its onSubmit function with", () => {
    const mockOnSubmit = jest.fn();

    render(<SignUpForm onSubmit={mockOnSubmit} />);

    const signUpForm = screen.getByLabelText("sign up form");

    fireEvent.submit(signUpForm);

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
