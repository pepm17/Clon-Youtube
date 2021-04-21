import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Video } from "../video/video.interface";
import "./index.scss";

const Home = () => {
  const [video, setVideo] = useState<Video[]>([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const result = await fetch("http://localhost:4000/video");
      const response = await result.json();
      setVideo(response.response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="video_groups">
      {video.map((data, index) => (
        <div className="card" key={index}>
          <div className="video">
            <span>12:02</span>
            <img
              src="https://as01.epimg.net/meristation/imagenes/2021/02/12/noticias/1613123570_444626_1613123673_noticia_normal_recorte1.jpg"
              alt="imageVideo"
            />
          </div>
          <div className="section_title">
            <img
              src="https://as01.epimg.net/meristation/imagenes/2021/02/12/noticias/1613123570_444626_1613123673_noticia_normal_recorte1.jpg"
              alt="user"
            />
            <h3>{data.title}</h3>
          </div>
          <div className="info">
            <span className="info_user">{data.postedBy.username}</span>
            <span className="info_video">{data.view} views hace 10min</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
