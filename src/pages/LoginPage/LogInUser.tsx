import { useState } from "react";
import FeedbackModal from "../../components/FeedBackModal/FeedbackModal";
import LogInForm from "../../components/LogInForm/LogInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import useApi from "../../hooks/useApi";

const LogInPage = (): JSX.Element => {
  const [hasAccount, setHasAccount] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { registerUser } = useApi();

  const handleSubmit = async (data: FormData) => {
    try {
      await registerUser(data);
    } catch (error: unknown) {
      setIsModalVisible(true);
    }
  };

  return (
    <>
      {hasAccount ? (
        <LogInForm setHasAccount={setHasAccount} />
      ) : (
        <SignUpForm setHasAccount={setHasAccount} onSubmit={handleSubmit} />
      )}

      <FeedbackModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        modalHeading={"Error"}
        modalBody={"There was an error creating your user."}
      />
    </>
  );
};

export default LogInPage;
