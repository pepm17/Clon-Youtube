import { UserActionsConst, UserActionsTypes } from ".";
import { LoginUser } from "./user.interface";

// Register use cases
export const registerUserLoading = (): UserActionsTypes => ({
    type: UserActionsConst.REGISTER_USER_LOADING,
    loading: true,
    response: false,
    error: ""
})

export const registerUserSuccess = (): UserActionsTypes => ({
    type: UserActionsConst.REGISTER_USER_SUCCESS,
    loading: false,
    response: true,
    error: ""
})

export const registerUserFail = (error: string): UserActionsTypes => ({
    type: UserActionsConst.REGISTER_USER_LOADING,
    loading: false,
    response: false,
    error
})

// Login uses cases

export const loginUserLoading = (): UserActionsTypes => ({
    type: UserActionsConst.LOGIN_USER_LOADING,
    loading: true,
    response: false,
    error: ""
})

export const loginUserSuccess = (response: LoginUser): UserActionsTypes => ({
    type: UserActionsConst.LOGIN_USER_SUCCESS,
    loading: false,
    response,
    error: ""
})

export const loginUserFail = (error: string): UserActionsTypes => ({
    type: UserActionsConst.LOGIN_USER_SUCCESS,
    loading: false,
    response: false,
    error
})