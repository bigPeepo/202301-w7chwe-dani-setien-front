import {
  registeredUserReducer,
  registerUserActionCreator,
} from "./registerSlice";

const mockUser = {
  username: "TitoRoy",
  isLogged: false,
};

describe("Given a registeredUser reducer", () => {
  describe("When it receives a logged out user named 'TitoRoy'", () => {
    test("Then it should return a logged in user named 'TitoRoy'", () => {
      const expectedUser = {
        username: mockUser.username,
        isLogged: true,
      };

      const registerUserAction = registerUserActionCreator(mockUser);

      const newUserStatus = registeredUserReducer(mockUser, registerUserAction);

      expect(newUserStatus).toStrictEqual(expectedUser);
    });
  });
});
