import { useState } from "react";

interface SignUpFormProps {
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpForm = ({ setHasAccount }: SignUpFormProps): JSX.Element => {
  const [image, setImage] = useState<File>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    if (image) {
      formData.append("image", image);
    }

    if (!usernameValue || !emailValue || !passwordValue) {
      return;
    }

    setUsernameValue("");
    setPasswordValue("");
    setEmailValue("");

    setHasAccount(true);
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
                encType="multipart/form"
                onSubmit={handleSubmit}
              >
                <h3 className="mb-5">Register</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    required
                  />
                  <label className="form-label">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="username"
                    id="typeUsernameX-2"
                    className="form-control form-control-lg"
                    required
                  />
                  <label className="form-label">Username</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    required
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="file"
                    id="typeImageX-2"
                    accept="image/*"
                    className="form-control form-control-lg"
                    onChange={handleImageChange}
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
