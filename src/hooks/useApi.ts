const useApi = () => {
  const urlApi = process.env.REACT_APP_URL_API!;

  const registerUser = async (data: FormData) => {
    const response = await fetch(`${urlApi}/user/signup`, {
      method: "POST",

      body: data,
    });

    if (!response.ok) {
      throw new Error();
    }
  };

  return { registerUser };
};

export default useApi;
