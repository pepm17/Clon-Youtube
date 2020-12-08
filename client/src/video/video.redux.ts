import axios from 'axios'
import { Dispatch } from 'redux'
import { IVideo } from './video.interface'

// State

export interface IVideoState {
  videos: IVideo[]
}

// Initial state

const initialVideoState: IVideoState = {
  videos: [],
}

// types

export const GET_ALL_VIDEOS = 'GET_ALL_VIDEOS'
export const CREATE_VIDEO = 'CREATE_VIDEO'

export interface GetAllVideo {
  type: typeof GET_ALL_VIDEOS
  payload: IVideo[]
}

export interface CreateVideo {
  type: typeof CREATE_VIDEO
  payload: IVideo[]
}

export type VideoActionType = GetAllVideo | CreateVideo

// reducer

export const videoReducer = (
  state: IVideoState = initialVideoState,
  action: VideoActionType
): IVideoState => {
  switch (action.type) {
    case 'GET_ALL_VIDEOS': {
      return { ...state, videos: action.payload }
    }
    case 'CREATE_VIDEO': {
      return { ...state, videos: action.payload }
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
