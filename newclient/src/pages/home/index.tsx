import React from "react";
import "./index.scss";

const Home = () => {
  return (
    <div className="video_groups">
      {[...new Array(50)].map((data, index) => (
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
            <h3>Title</h3>
          </div>
          <div className="info">
            <span className="info_user">User</span>
            <span className="info_video">12k views hace 10min</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
