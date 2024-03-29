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
import { CreateVideoFail, CreateVideoLoading, CreateVideoSuccess } from "./video.actions";
import { CreateVideo } from "./video.types";

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
      if(json.httpCode){
        return dispatch(GetVideoByIdFail("Video not found"));
      }
      dispatch(GetVideoByIdSuccess(json.response));
    } catch (error) {
      dispatch(GetVideoByIdFail("Error to get"));
    }
  };
};

export const createVideo = (video: CreateVideo) => {
  return async (dispatch: Dispatch<VideoActionsTypes>) => {
    dispatch(CreateVideoLoading());
    const data = new FormData();
    data.append("title", video.title);
    data.append("description", video.description);
    data.append("postedBy", video.postedBy);
    data.append("image", video.image as File);
    data.append("video", video.video as File);
    try {
      const response = await fetch("http://localhost:4000/video", {
        method: "POST",
        body: data
      })

      await response.json();
      dispatch(CreateVideoSuccess())
      
    } catch (error) {
      dispatch(CreateVideoFail("Fail create video"));      
    }
  }
}
