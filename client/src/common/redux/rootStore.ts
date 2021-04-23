import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { UserActionsTypes, UserReducer } from "../../user";
import { VideoReducer, VideoActionsTypes } from "../../video";

type AppActions = VideoActionsTypes | UserActionsTypes;

export const rootReducer = combineReducers({ video: VideoReducer, user: UserReducer })

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {},{}>(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
)