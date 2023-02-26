import { useState } from "react";
import useApi from "../../hooks/useApi";
import FeedbackModal from "../../components/FeedBackModal/FeedbackModal";
import LogInForm from "../../components/luis/LogInForm";
import SignUpForm from "../../components/fermin/SignUpForm";

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
