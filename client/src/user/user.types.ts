import { LoginUser } from ".";

export enum UserActionsConst {
    REGISTER_USER_LOADING = "REGISTER_USER_LOADING",
    REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS",
    REGISTER_USER_FAIL = "REGISTER_USER_FAIL",
    LOGIN_USER_LOADING = "LOGIN_USER_LOADING",
    LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
    LOGIN_USER_FAIL = "LOGIN_USER_FAIL",
}

interface UserAsync {
    loading: boolean;
    response: boolean | LoginUser;
    error: string;
}

// Register User

interface RegisterUserLoading extends UserAsync {
    type: UserActionsConst.REGISTER_USER_LOADING;
}

interface RegisterUserSuccess extends UserAsync {
    type: UserActionsConst.REGISTER_USER_SUCCESS;
}

interface RegisterUserFail extends UserAsync {
    type: UserActionsConst.REGISTER_USER_FAIL;
}

type RegisterUserType = RegisterUserLoading | RegisterUserSuccess | RegisterUserFail;

// Login User

interface LoginUserLoading extends UserAsync {
    type: UserActionsConst.LOGIN_USER_LOADING;
}

interface LoginUserSuccess extends UserAsync {
    type: UserActionsConst.LOGIN_USER_SUCCESS;
}

interface LoginUserFail extends UserAsync {
    type: UserActionsConst.LOGIN_USER_FAIL;
}

type LoginUserType = LoginUserLoading | LoginUserSuccess | LoginUserFail;

export type UserActionsTypes = LoginUserType | RegisterUserType;