import { Dispatch } from "redux";
import {
  UserActionsTypes,
  registerUserLoading,
  RegisterUser,
  registerUserFail,
  registerUserSuccess,
  UserReturned,
  loginUserFail,
  loginUserLoading,
  loginUserSuccess,
} from ".";

export const registerUser = (registerUser: RegisterUser) => {
  return async (dispatch: Dispatch<UserActionsTypes>) => {
    dispatch(registerUserLoading());
    const data = new FormData();

    data.append("email", registerUser.email);
    data.append("username", registerUser.username);
    data.append("photo", registerUser.photo as File);
    data.append("password", registerUser.password);
    data.append("confirmPassword", registerUser.confirmPassword);
    try {
      const result = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        body: data,
      });
      await result.json();
      dispatch(registerUserSuccess());
    } catch (error) {
      dispatch(registerUserFail("Error to create"));
    }
  };
};

export const loginUser = (user: UserReturned) => {
  return async (dispatch: Dispatch<UserActionsTypes>) => {
    dispatch(loginUserLoading());
    try {
      const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const json = await response.json();
      if (json.statusCode) return dispatch(loginUserFail("Error in login"));
      dispatch(loginUserSuccess(json.response));
    } catch (error) {
      dispatch(loginUserFail("Error in login"));
    }
  };
};
