import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/rootStore";
import "./index.scss";
import { fetchVideos } from "../video/video.actions";

const Home = () => {
  const dispatch = useDispatch();
  const videoState = useSelector((state: AppState) => state.video);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <div className="video_groups">
      {videoState.videos.map((data, index) => (
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
