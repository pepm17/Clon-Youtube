import { VideoActionsConst, VideoActionsTypes, Video } from ".";

// Case Use Get All Videos
export const GetAllVideosLoading = (): VideoActionsTypes => ({
  type: VideoActionsConst.GET_ALL_VIDEOS_LOADING,
  loading: true,
  videos: [],
  error: "",
});

export const GetAllVideosSuccess = (videos: Video[]): VideoActionsTypes => ({
  type: VideoActionsConst.GET_ALL_VIDEOS_SUCCESS,
  loading: false,
  videos,
  error: "",
});

export const GetAllVideosFail = (error: string): VideoActionsTypes => ({
  type: VideoActionsConst.GET_ALL_VIDEOS_FAIL,
  loading: false,
  videos: [],
  error,
});

// Case Use Get Video By Id

export const GetVideoByIdLoading = (): VideoActionsTypes => ({
  type: VideoActionsConst.GET_VIDEO_BY_ID_LOADING,
  loading: true,
  video: undefined,
  error: "",
});

export const GetVideoByIdSuccess = (video: Video): VideoActionsTypes => ({
  type: VideoActionsConst.GET_VIDEO_BY_ID_SUCCESS,
  loading: false,
  video,
  error: "",
});

export const GetVideoByIdFail = (error: string): VideoActionsTypes => ({
  type: VideoActionsConst.GET_VIDEO_BY_ID_FAIL,
  loading: false,
  video: undefined,
  error,
});

// Case Use Crate Video

export const CreateVideoLoading = (): VideoActionsTypes => ({
  type: VideoActionsConst.CREATE_VIDEO_LOADING,
  loading: true,
  create: false,
  error: "",
});

export const CreateVideoSuccess = (): VideoActionsTypes => ({
  type: VideoActionsConst.CREATE_VIDEO_SUCCESS,
  loading: false,
  create: true,
  error: "",
});

export const CreateVideoFail = (error: string): VideoActionsTypes => ({
  type: VideoActionsConst.CREATE_VIDEO_FAIL,
  loading: false,
  create: false,
  error,
});
