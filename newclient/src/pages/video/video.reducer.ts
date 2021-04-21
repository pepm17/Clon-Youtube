import { Video, VideoActionsConst, VideoActionsTypes } from "./video.types";

interface VideosState {
    loading:boolean;
    videos: Video[];
    error: string;
}

interface VideoState {
    loading:boolean;
    videos: Video[];
    error: string;
}

type StateType = VideosState | VideoState;

const defaultState: StateType = {
    loading: true,
    videos: [] || {},
    error: ""
}

export const videoReducer = (state = defaultState, action: VideoActionsTypes): StateType => {
    switch (action.type){
        case VideoActionsConst.FETCH_VIDEOS_REQUEST:{
            return {...action }}

        case VideoActionsConst.FETCH_VIDEOS_SUCCESS:{
            return {...action, loading: false, videos: action.videos}}

        case VideoActionsConst.FETCH_VIDEOS_FAIL:{
            return {...action, loading: false, error: action.error}}
        
        default:{
            return {...state}}
    }    
}