export interface RegisteredUserInfo {
  username: string;
  isLogged: boolean;
}

export interface RegisterUserRequest {
  body: { username: string; email: string; password: string };
  file: {
    image: string;
  };
}
