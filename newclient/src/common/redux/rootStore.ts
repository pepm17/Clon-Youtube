import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { VideoReducer, VideoActionsTypes } from "../../video";

type AppActions = VideoActionsTypes;

export const rootReducer = combineReducers({ video: VideoReducer })

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {},{}>(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
)