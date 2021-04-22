import { Dispatch } from "redux";
import {
  GetAllVideosFail,
  GetAllVideosLoading,
  GetAllVideosSuccess,
  VideoActionsTypes,
  GetVideoByIdLoading,
  GetVideoByIdSuccess,
  GetVideoByIdFail
} from ".";

export const getAllVideos = () => {
  return async (dispatch: Dispatch<VideoActionsTypes>) => {
    dispatch(GetAllVideosLoading());
    try {
      const result = await fetch("http://localhost:4000/video");
      const json = await result.json();
      dispatch(GetAllVideosSuccess(json.response));
    } catch (error) {
      dispatch(GetAllVideosFail("Error to get"));
    }
  };
};

export const getVideoById = (id: string) => {
  return async (dispatch: Dispatch<VideoActionsTypes>) => {
    dispatch(GetVideoByIdLoading());
    try {
      const result = await fetch(`http://localhost:4000/video/${id}`);
      const json = await result.json();
      dispatch(GetVideoByIdSuccess(json.response));
    } catch (error) {
      dispatch(GetVideoByIdFail("Error to get"));
    }
  };
};
