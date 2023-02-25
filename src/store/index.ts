import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { registeredUserReducer } from "./features/registerSlice/registerSlice";

export const store = configureStore({
  reducer: {
    registeredUser: registeredUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
