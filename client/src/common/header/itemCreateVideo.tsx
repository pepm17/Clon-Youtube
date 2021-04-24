import React from "react";
import { RiVideoUploadFill } from "react-icons/ri";
import "./itemCreateVideo.scss";

const ItemCreateVideo = () => {
  return (
    <div className="item_create_video">
      <RiVideoUploadFill />
      <span>Create Video</span>
    </div>
  );
};

export default ItemCreateVideo;
