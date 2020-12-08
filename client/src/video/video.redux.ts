import axios from 'axios'
import { Dispatch } from 'redux'
import { IVideo } from './video.interface'

// State

export interface IVideoState {
  videos: IVideo[]
  video: IVideo | null
}

// Initial state

const initialVideoState: IVideoState = {
  videos: [],
  video: null,
}

// types

export const GET_ALL_VIDEOS = 'GET_ALL_VIDEOS'
export const GET_VIDEO_ID = 'GET_VIDEO_ID'
export const CREATE_VIDEO = 'CREATE_VIDEO'

export interface GetAllVideo {
  type: typeof GET_ALL_VIDEOS
  payload: IVideo[]
}

export interface CreateVideo {
  type: typeof CREATE_VIDEO
  payload: IVideo
}

export interface GetVideoById {
  type: typeof GET_VIDEO_ID
  payload: IVideo
}

export type VideoActionType = GetAllVideo | CreateVideo | GetVideoById

// reducer

export const videoReducer = (
  state: IVideoState = initialVideoState,
  action: VideoActionType
): IVideoState => {
  switch (action.type) {
    case 'GET_VIDEO_ID': {
      return { ...state, video: action.payload }
    }
    case 'GET_ALL_VIDEOS': {
      return { ...state, videos: action.payload }
    }
    case 'CREATE_VIDEO': {
      return { ...state, video: action.payload }
    }
    default:
      return state
  }
}

// Actions

export const getAllVideos = () => async (dispatch: Dispatch, getState: () => IVideoState) => {
  try {
    const videos = await axios.get('http://localhost:4000/video', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    dispatch({
      type: 'GET_ALL_VIDEOS',
      payload: videos.data.response,
    })
  } catch (error) {
    console.error(error)
  }
}

export const getVideoById = (id: string | number) => async (
  dispatch: Dispatch,
  getState: () => IVideoState
) => {
  try {
    const videos = await axios.get(`http://localhost:4000/video/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    dispatch({
      type: 'GET_VIDEO_ID',
      payload: videos.data.response,
    })
  } catch (error) {
    console.error(error)
  }
}
