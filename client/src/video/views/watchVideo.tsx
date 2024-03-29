import React from "react";
import { Video } from "../";
import ReactPlayer from "react-player";

import "./watchVideo.scss";
const WatchVideo = ({ video }: { video: Video }) => {
  return (
    <>
      <div className="video">
        <ReactPlayer
          url={"http://localhost:4000/" + video.video}
          title={video.video}
          controls
          width="100%"
          height="100%"
        ></ReactPlayer>
      </div>
      <div className="video_repro_info">
        <h3>{video.title}</h3>
        <div className="video_repro_info_view_date">
          <span>{video.view + "views"}</span>
          <span> {video.createdAt.toString()}</span>
        </div>
        <hr style={{ backgroundColor: "grey" }} />
        <h4>{video.postedBy.username}</h4>
        <p>{video.description}</p>
      </div>
      <hr style={{ backgroundColor: "grey" }} />
    </>
  );
};

export default WatchVideo;
