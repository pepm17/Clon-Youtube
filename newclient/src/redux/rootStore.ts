import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { videoReducer } from "../pages/video/video.reducer";
import { AppActions } from "./actions";

export const rootReducer = combineReducers({ video: videoReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {}, {}>(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState,AppActions>)
)