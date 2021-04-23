import { UserActionsTypes, UserActionsConst } from ".";

interface UserState {
  loading: boolean;
  response: boolean | string;
  error: string;
}

const defaultState: UserState = {
  loading: true,
  response: false,
  error: "",
};

export const UserReducer = (
  state = defaultState,
  action: UserActionsTypes
): UserState => {
  switch (action.type) {
    case UserActionsConst.REGISTER_USER_LOADING: {
      return { ...action };
    }
    case UserActionsConst.REGISTER_USER_SUCCESS: {
      return { ...action };
    }
    case UserActionsConst.REGISTER_USER_FAIL: {
      return { ...action };
    }

    case UserActionsConst.LOGIN_USER_LOADING: {
      return { ...action };
    }
    case UserActionsConst.LOGIN_USER_SUCCESS: {
      return { ...action };
    }
    case UserActionsConst.LOGIN_USER_FAIL: {
      return { ...action };
    }

    default: {
      return { ...state };
    }
  }
};
