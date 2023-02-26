const useApi = () => {
  const urlApi = process.env.REACT_APP_URL_API!;

  const registerUser = async (data: FormData) => {
    try {
      await fetch(`${urlApi}/user/signup`, {
        method: "POST",
        body: data,
      });
    } catch (error) {
      return (error as Error).message;
    }
  };

  return { registerUser };
};

export default useApi;
