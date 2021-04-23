import { Dispatch } from "redux";
import {
  UserActionsTypes,
  registerUserLoading,
  RegisterUser,
  registerUserFail,
  registerUserSuccess,
} from ".";

export const registerUser = (registerUser: RegisterUser) => {
  return async (dispatch: Dispatch<UserActionsTypes>) => {
    dispatch(registerUserLoading());

    try {
      const result = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerUser),
      });
      await result.json();
      dispatch(registerUserSuccess());
    } catch (error) {
      dispatch(registerUserFail("Error to create"));
    }
  };
};
