import { User } from "../user/user.interface";

export interface Video {
  _id: string;
  title: string;
  description: string;
  video: string;
  image: string;
  view: number;
  postedBy: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddVideo {
    _id: string;
    title: string;
    description: string;
    video: string;
    image: string;
    postedBy: string;
  }

export enum VideoActionsConst {
    FETCH_VIDEOS_REQUEST = "FETCH_VIDEOS_REQUEST", 
    FETCH_VIDEOS_SUCCESS = "FETCH_VIDEOS_SUCCESS",
    FETCH_VIDEOS_FAIL = "FETCH_VIDEOS_FAIL", 
    FETCH_VIDEO_REQUEST = "FETCH_VIDEO_REQUEST", 
    FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS",
    FETCH_VIDEO_FAIL = "FETCH_VIDEO_FAIL",
    ADD_VIDEO_REQUEST = "ADD_VIDEO_REQUEST", 
    ADD_VIDEO_SUCCESS = "ADD_VIDEO_SUCCESS",
    ADD_VIDEO_FAIL = "ADD_VIDEO_FAIL"
}

// Fetch Videos

interface VideosAsync {
    loading: boolean;
    videos: Video[];
    error: string;
}

interface FETCH_VIDEOS_REQUEST extends VideosAsync {
    type: typeof VideoActionsConst.FETCH_VIDEOS_REQUEST;
}

interface FETCH_VIDEOS_SUCCESS extends VideosAsync {
    type: typeof VideoActionsConst.FETCH_VIDEOS_SUCCESS;
}

interface FETCH_VIDEOS_FAIL extends VideosAsync {
    type: typeof VideoActionsConst.FETCH_VIDEOS_FAIL;
}

// Fetch Video

interface VideoAsync {
    loading: boolean;
    video?: Video;
    error: string;
}

interface FETCH_VIDEO_REQUEST extends VideoAsync {
    type: typeof VideoActionsConst.FETCH_VIDEO_REQUEST;
}

interface FETCH_VIDEO_SUCCESS extends VideoAsync {
    type: typeof VideoActionsConst.FETCH_VIDEO_SUCCESS;
}

interface FETCH_VIDEO_FAIL extends VideoAsync {
    type: typeof VideoActionsConst.FETCH_VIDEO_FAIL;
}

// Add Video

interface AddVideoAsync {
    loading: boolean;
    video?: AddVideo;
    error: string;
}

interface ADD_VIDEO_REQUEST extends AddVideoAsync {
    type: typeof VideoActionsConst.ADD_VIDEO_REQUEST;
}

interface ADD_VIDEO_SUCCESS extends AddVideoAsync {
    type: typeof VideoActionsConst.ADD_VIDEO_SUCCESS;
}

interface ADD_VIDEO_FAIL extends AddVideoAsync {
    type: typeof VideoActionsConst.ADD_VIDEO_FAIL;
}

export type VideoActionsTypes = 
            FETCH_VIDEOS_REQUEST |
            FETCH_VIDEOS_SUCCESS |
            FETCH_VIDEOS_FAIL    |
            FETCH_VIDEO_REQUEST  |
            FETCH_VIDEO_SUCCESS  |
            FETCH_VIDEO_FAIL     |
            ADD_VIDEO_REQUEST    |
            ADD_VIDEO_SUCCESS    |
            ADD_VIDEO_FAIL
