import { useState } from "react";
import useApi from "../../hooks/useApi";
import FeedbackModal from "../../components/FeedBackModal/FeedbackModal";
import LogInForm from "../../components/LogInForm/LogInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const LogInPage = (): JSX.Element => {
  const [hasAccount, setHasAccount] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { registerUser } = useApi();

  const handleSubmit = async (data: FormData) => {
    try {
      await registerUser(data);
      setHasAccount(true);
    } catch (error: unknown) {
      setIsModalVisible(true);
    }
  };

  return (
    <>
      {hasAccount ? (
        <LogInForm setHasAccount={setHasAccount} />
      ) : (
        <SignUpForm onSubmit={handleSubmit} />
      )}

      <FeedbackModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        modalHeading={"Error 🚩"}
        modalBody={"There was an error creating your user."}
      />
    </>
  );
};

export default LogInPage;
