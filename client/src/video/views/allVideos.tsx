import React, { useEffect } from "react";
import { AppState } from "../../common/redux/rootStore";
import { getAllVideos } from "../";
import { connect } from "react-redux";
import "./allVideos.scss";
import { Link } from "react-router-dom";
import { Video } from "../video.types";

interface StateProps {
  videos: Video[];
}

interface DispatchProps {
  getAllVideosDispatch: () => void;
}

type Props = StateProps & DispatchProps;
const AllVideos = ({ getAllVideosDispatch, videos }: Props) => {
  useEffect(() => {
    getAllVideosDispatch();
  }, [getAllVideosDispatch]);

  return (
    <div className="video_groups">
      {videos.map((data, index) => (
        <div key={index} className="card">
          <Link
            to={`/video/${data._id}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            <div className="video">
              <span>12:02</span>
              <img
                src={"http://localhost:4000/" + data.image}
                alt="imageVideo"
              />
            </div>
            <div className="section_title">
              <img
                src={
                  data.postedBy?.photo
                    ? "http://localhost:4000/" + data.postedBy.photo
                    : "https://as01.epimg.net/meristation/imagenes/2021/02/12/noticias/1613123570_444626_1613123673_noticia_normal_recorte1.jpg"
                }
                alt="user"
              />
              <h3>{data.title}</h3>
            </div>
            <div className="info">
              <span className="info_user">{data.postedBy.username}</span>
              <span className="info_video">{data.view} views hace 10min</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  videos: state.video.videos,
});

const mapDispatchToProps = (dispatch: any) => ({
  getAllVideosDispatch: (): void => dispatch(getAllVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllVideos);
