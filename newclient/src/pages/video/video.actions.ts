import { Dispatch } from "redux";
import { AppActions } from "../../redux/actions";
import { AddVideo, Video, VideoActionsConst, VideoActionsTypes } from "./video.types";

// All Videos

const requestVideos = (): VideoActionsTypes => ({
    type: VideoActionsConst.FETCH_VIDEOS_REQUEST,
    loading: true,
    videos: [],
    error: ""
})

const receiveVideos = (videos: Video[]): VideoActionsTypes => ({
    type: VideoActionsConst.FETCH_VIDEOS_SUCCESS,
    loading: false,
    videos,
    error: ""
})

const failVideos = (error: any): VideoActionsTypes => ({
    type: VideoActionsConst.FETCH_VIDEOS_SUCCESS,
    loading: false,
    videos: [],
    error
})

export const fetchVideos = () => {
    return async (dispatch: Dispatch<AppActions>) => {   
        dispatch(requestVideos());

        try {
            const result = await fetch("http://localhost:4000/video");
            const json = await result.json();
            return dispatch(receiveVideos(json.response));
        } catch (error) {
            return dispatch(failVideos(error.message));
        }   

    }
}

// Video by id

const requestVideo = (): VideoActionsTypes => ({
    type: VideoActionsConst.FETCH_VIDEO_REQUEST,
    loading: true,
    video: undefined,
    error: ""
})

const receiveVideo = (video: Video): VideoActionsTypes => ({
    type: VideoActionsConst.FETCH_VIDEO_SUCCESS,
    loading: false,
    video,
    error: ""
})

const failVideo = (error: any): VideoActionsTypes => ({
    type: VideoActionsConst.FETCH_VIDEO_SUCCESS,
    loading: false,
    video: undefined,
    error
})

export const fetchVideo = (id: string) => {
    return async (dispatch: Dispatch<AppActions>) => {
        dispatch(requestVideo());
        
        try {
            const result = await fetch(`http://localhost:4000/video/${id}`);
            const json = await result.json();
            return dispatch(receiveVideo(json.result));
        } catch (error) {
            return dispatch(failVideo(error.message));
        }   

    }
}

// Add video

const prepareVideo = (): VideoActionsTypes => ({
    type: VideoActionsConst.ADD_VIDEO_REQUEST,
    loading: true,
    video: undefined,
    error: ""
})

const sendVideo = (video: AddVideo): VideoActionsTypes => ({
    type: VideoActionsConst.ADD_VIDEO_SUCCESS,
    loading: false,
    video,
    error: ""
})

const failSendVideo = (error: any): VideoActionsTypes => ({
    type: VideoActionsConst.ADD_VIDEO_SUCCESS,
    loading: false,
    video: undefined,
    error
})

export const addVideo = (video: AddVideo) => {
    return async (dispatch: Dispatch<AppActions>) => {
        dispatch(prepareVideo());
        
        try {
            const result = await fetch(`http://localhost:4000/video`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(video)
            });

            const json = await result.json();
            return dispatch(sendVideo(json.result));
        } catch (error) {
            return dispatch(failSendVideo(error.message));
        }   

    }
}