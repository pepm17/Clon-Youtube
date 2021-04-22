import React from "react";
import { Video } from "../";

const WatchVideo = ({ video }: { video: Video }) => {
  return (
    <div className="video_reproductor">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IlcZY_qeBKs"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default WatchVideo;
