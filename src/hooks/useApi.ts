import { RegisterUserRequest } from "../types/types";

const useApi = () => {
  const urlApi = process.env.REACT_APP_URL_API!;

  const registerUser = async ({
    body: { username, email, password },
  }: RegisterUserRequest) => {
    try {
      await fetch(`${urlApi}/user/signup`, {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      return (error as Error).message;
    }
  };

  return { registerUser };
};

export default useApi;
