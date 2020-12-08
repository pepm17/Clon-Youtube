import { combineReducers, createStore, applyMiddleware } from 'redux'
import { videoReducer } from '../video/video.redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
  videos: videoReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootStore = ReturnType<typeof rootReducer>
