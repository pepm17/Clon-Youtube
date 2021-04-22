import React from "react";
import GetVideoById from "../video/views/getVideoById";
import "./watchVideoPage.scss";

const WatchVideoPage = () => {
  return (
    <div className="watch_page">
      <div className="video_info">
        <GetVideoById />
      </div>
    </div>
  );
};

export default WatchVideoPage;
