import React from "react";
import { RiVideoUploadFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./itemCreateVideo.scss";

const ItemCreateVideo = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <div className="item_create_video">
          <Link
            to={`/video/create`}
            style={{ color: "white", textDecoration: "none", display: "flex" }}
          >
            <RiVideoUploadFill />
            <span>Create Video</span>
          </Link>
        </div>
      ) : undefined}
    </>
  );
};

export default ItemCreateVideo;
