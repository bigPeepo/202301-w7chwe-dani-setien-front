import styles from "./LogInForm.module.css";

interface LogInFormProps {
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogInForm = ({ setHasAccount }: LogInFormProps): JSX.Element => {
  return (
    <section className="vh-100" style={{ color: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <form className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>

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
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    required
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className={styles.container}>
                  <button
                    className={`btn btn-primary btn-lg btn-block button ${styles.button}`}
                    type="submit"
                  >
                    Login
                  </button>

                  <button
                    className={`btn btn-secondary btn-lg btn-block button ${styles.button}`}
                    type="submit"
                    onClick={() => setHasAccount(false)}
                  >
                    Register
                  </button>
                </div>

                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInForm;
