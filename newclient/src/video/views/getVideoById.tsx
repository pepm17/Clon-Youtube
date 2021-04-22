import React from "react";
import { useParams } from "react-router-dom";

interface VideoId {
  id: string;
}

const GetVideoById = () => {
  const { id } = useParams<VideoId>();
  return <>{id}</>;
};

export default GetVideoById;
