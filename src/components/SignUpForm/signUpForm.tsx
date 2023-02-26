import { useState } from "react";
import { RegisterUserRequest } from "../../types/types";
import useApi from "../../hooks/useApi";

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

    if (!usernameValue || !emailValue || !passwordValue) {
      return;
    }

    setUsernameValue("");
    setPasswordValue("");
    setEmailValue("");
    setImageValue("");

    registerUser(newUser);
  };

  return (
    <section className="vh-100" style={{ color: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <form
                className="card-body p-5 text-center"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <h3 className="mb-5">Register</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    onChange={handleEmailChange}
                    value={emailValue}
                    required
                  />
                  <label className="form-label">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="username"
                    id="typeUsernameX-2"
                    className="form-control form-control-lg"
                    onChange={handleUsernameChange}
                    value={usernameValue}
                    required
                  />
                  <label className="form-label">Username</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    required
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="file"
                    id="typeImageX-2"
                    className="form-control form-control-lg"
                    onChange={handleImageChange}
                    value={emailValue}
                  />
                  <label className="form-label">Avatar</label>
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Register
                </button>

                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
