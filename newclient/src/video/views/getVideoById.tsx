import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { AppState } from "../../common/redux/rootStore";
import { getVideoById } from "../";

interface VideoId {
  id: string;
}

const GetVideoById = () => {
  const { id } = useParams<VideoId>();
  const dispatch = useDispatch();
  const video = useSelector((state: AppState) => state.video);

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [id, dispatch]);

  return (
    <>
      {video.error === "Video not found" ? (
        <Redirect push to="/page_not_found" />
      ) : (
        video.video?.title
      )}
    </>
  );
};

export default GetVideoById;
