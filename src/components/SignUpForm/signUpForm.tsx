import { useState } from "react";
import { RegisterUserRequest } from "../../types/types";
import useApi from "../../hooks/useApi";
import SignUpFormStyled from "./signUpFormStyled";

const SignUpForm = (): JSX.Element => {
  const { registerUser } = useApi();

  const [usernameValue, setUsernameValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageValue(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser: RegisterUserRequest = {
      body: {
        username: usernameValue,
        email: emailValue,

        password: passwordValue,
      },
      file: { image: imageValue },
    };

    setUsernameValue("");
    setImageValue("");
    setPasswordValue("");
    setEmailValue("");

    registerUser(newUser);
  };

  return (
    <SignUpFormStyled>
      <h3 className="form-title">Register: </h3>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          onChange={handleUsernameChange}
          value={usernameValue}
          placeholder="username"
          required
        ></input>
        <label htmlFor="image">Image: </label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          value={imageValue}
          placeholder="image file"
        ></input>
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          onChange={handlePasswordChange}
          value={passwordValue}
          placeholder="password"
          required
        ></input>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          onChange={handleEmailChange}
          value={emailValue}
          placeholder="email"
          required
        ></input>
        <button type="submit" className="form__button">
          Sign up
        </button>
      </form>
    </SignUpFormStyled>
  );
};

export default SignUpForm;
