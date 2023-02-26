import { useState } from "react";
import LogInForm from "../../components/LogInForm/LogInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const LogInPage = (): JSX.Element => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <>
      {hasAccount ? (
        <LogInForm setHasAccount={setHasAccount} />
      ) : (
        <SignUpForm setHasAccount={setHasAccount} />
      )}
    </>
  );
};

export default LogInPage;
