import { Video, VideoActionsTypes, VideoActionsConst } from ".";

export interface VideoStateStructure {
  loading: boolean;
  videos?: Video[];
  video?: Video;
  create?: boolean;
  error: string;
}

const initialState: VideoStateStructure = {
  loading: true,
  error: "",
  videos: [],
  video: undefined,
  create: false,
};

export const VideoReducer = (
  state = initialState,
  action: VideoActionsTypes
): VideoStateStructure => {
  switch (action.type) {
    case VideoActionsConst.GET_ALL_VIDEOS_LOADING: {
      return { ...action };
    }

    case VideoActionsConst.GET_ALL_VIDEOS_SUCCESS:
      return { ...action };

    case VideoActionsConst.GET_ALL_VIDEOS_FAIL:
      return { ...action };

    case VideoActionsConst.GET_VIDEO_BY_ID_LOADING: {
      return { ...action };
    }

    case VideoActionsConst.GET_VIDEO_BY_ID_SUCCESS:
      return { ...action };

    case VideoActionsConst.GET_VIDEO_BY_ID_FAIL:
      return { ...action };

    default:
      return state;
  }
};
