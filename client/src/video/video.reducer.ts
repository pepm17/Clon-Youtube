import { Video, VideoActionsTypes, VideoActionsConst } from ".";

const init: Video = {
  id: "",
  title: "",
  description: "",
  image: "",
  video: "",
  createdAt: new Date(),
  postedBy: {
    id: "",
    email: "",
    photo: "",
    username: "",
  },
  updatedAt: new Date(),
  view: 0,
};

export interface VideoStateStructure {
  loading: boolean;
  videos: Video[];
  video: Video;
  create: boolean;
  error: string;
}

const initialState: VideoStateStructure = {
  loading: true,
  error: "",
  videos: [],
  video: init,
  create: false,
};

export const VideoReducer = (
  state = initialState,
  action: VideoActionsTypes
): VideoStateStructure => {
  switch (action.type) {
    case VideoActionsConst.GET_ALL_VIDEOS_LOADING: {
      return { ...state, ...action };
    }

    case VideoActionsConst.GET_ALL_VIDEOS_SUCCESS:
      return { ...state, ...action };

    case VideoActionsConst.GET_ALL_VIDEOS_FAIL:
      return { ...state, ...action };

    case VideoActionsConst.GET_VIDEO_BY_ID_LOADING: {
      return { ...state, ...action };
    }

    case VideoActionsConst.GET_VIDEO_BY_ID_SUCCESS:
      return { ...state, ...action };

    case VideoActionsConst.GET_VIDEO_BY_ID_FAIL:
      return { ...state, ...action };

    case VideoActionsConst.CREATE_VIDEO_SUCCESS:
      return { ...state, ...action };

    default:
      return state;
  }
};
