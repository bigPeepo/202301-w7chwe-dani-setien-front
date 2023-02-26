import { useState } from "react";
import styles from "./SignUpForm.module.css";

interface SignUpFormProps {
  onSubmit: (data: FormData) => void;
}

const SignUpForm = ({ onSubmit }: SignUpFormProps): JSX.Element => {
  const [image, setImage] = useState<File>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (image) {
      formData.append("image", image);
    }

    onSubmit(formData);
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
                    name="email"
                    className="form-control form-control-lg"
                    required
                  />
                  <label className="form-label">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="username"
                    name="username"
                    className="form-control form-control-lg"
                    required
                  />
                  <label className="form-label">Username</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    required
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control form-control-lg"
                    onChange={handleImageChange}
                  />
                  <label className="form-label">Avatar</label>
                </div>

                <button
                  className={`btn btn-primary btn-lg btn-block ${styles.button}`}
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
