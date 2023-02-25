import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisteredUserInfo } from "../../../types/types";

const initialRegisteredUserState: RegisteredUserInfo = {
  username: "",
  isLogged: false,
};

const registeredUserSlice = createSlice({
  name: "registeredUser",
  initialState: initialRegisteredUserState,
  reducers: {
    registerUser: (
      currentUserStatus: RegisteredUserInfo,
      action: PayloadAction<RegisteredUserInfo>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { registerUser: registerUserActionCreator } =
  registeredUserSlice.actions;

export const registeredUserReducer = registeredUserSlice.reducer;
