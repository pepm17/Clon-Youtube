import { User } from "../user";

export enum VideoActionsConst {
  GET_ALL_VIDEOS_LOADING = "GET_ALL_VIDEOS_LOADING",
  GET_ALL_VIDEOS_SUCCESS = "GET_ALL_VIDEOS_SUCCESS",
  GET_ALL_VIDEOS_FAIL = "GET_ALL_VIDEOS_FAIL",
  GET_VIDEO_BY_ID_LOADING = "GET_VIDEO_BY_ID_LOADING",
  GET_VIDEO_BY_ID_SUCCESS = "GET_VIDEO_BY_ID_SUCCESS",
  GET_VIDEO_BY_ID_FAIL = "GET_VIDEO_BY_ID_FAIL",
  CREATE_VIDEO_LOADING = "CREATE_VIDEO_LOADING",
  CREATE_VIDEO_SUCCESS = "CREATE_VIDEO_SUCCESS",
  CREATE_VIDEO_FAIL = "CREATE_VIDEO_FAIL",
}

interface VideoStructure {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
}

export interface CreateVideo {
  title: string;
  description: string;
  image: File | FileList;
  video: File | FileList;
  postedBy: string;
}

export interface Video extends VideoStructure {
  postedBy: User;
  view: number;
  createdAt: Date;
  updatedAt: Date;
}

interface VideoAsync {
  loading: boolean;
  error: string;
}

// All Videos

interface GetAllVideosAsync extends VideoAsync {
  videos: Video[];
}

interface GetAllVideosLoading extends GetAllVideosAsync {
  type: VideoActionsConst.GET_ALL_VIDEOS_LOADING;
}

interface GetAllVideosSuccess extends GetAllVideosAsync {
  type: VideoActionsConst.GET_ALL_VIDEOS_SUCCESS;
}

interface GetAllVideosFail extends GetAllVideosAsync {
  type: VideoActionsConst.GET_ALL_VIDEOS_FAIL;
}

type GetAllVideosType =
  | GetAllVideosLoading
  | GetAllVideosSuccess
  | GetAllVideosFail;

// Get Video By Id

interface GetVideoByIdAsync extends VideoAsync {
  video?: Video;
}

interface GetVideoByIdLoading extends GetVideoByIdAsync {
  type: VideoActionsConst.GET_VIDEO_BY_ID_LOADING;
}

interface GetVideoByIdSuccess extends GetVideoByIdAsync {
  type: VideoActionsConst.GET_VIDEO_BY_ID_SUCCESS;
}

interface GetVideoByIdFail extends GetVideoByIdAsync {
  type: VideoActionsConst.GET_VIDEO_BY_ID_FAIL;
}

type GetVideoByIdType =
  | GetVideoByIdLoading
  | GetVideoByIdSuccess
  | GetVideoByIdFail;

// Create Video

interface CreateVideoAsync extends VideoAsync {
  create: boolean;
}

interface CreateVideoAsyncLoading extends CreateVideoAsync {
  type: VideoActionsConst.CREATE_VIDEO_LOADING;
}

interface CreateVideoAsyncSuccess extends CreateVideoAsync {
  type: VideoActionsConst.CREATE_VIDEO_SUCCESS;
}

interface CreateVideoAsyncFail extends CreateVideoAsync {
  type: VideoActionsConst.CREATE_VIDEO_FAIL;
}

type CreateVideoType =
  | CreateVideoAsyncLoading
  | CreateVideoAsyncSuccess
  | CreateVideoAsyncFail;

export type VideoActionsTypes =
  | GetAllVideosType
  | GetVideoByIdType
  | CreateVideoType;
