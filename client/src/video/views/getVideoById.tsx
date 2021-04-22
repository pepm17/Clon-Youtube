import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { AppState } from "../../common/redux/rootStore";
import { getVideoById } from "../";
import WatchVideo from "./watchVideo";

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
      ) : undefined}
      <div className="video_info_repro">
        {video.video ? <WatchVideo video={video.video} /> : undefined}
      </div>
    </>
  );
};

export default GetVideoById;
