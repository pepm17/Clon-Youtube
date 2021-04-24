import ReactPlayer from "react-player";
import style from "./watchVideo.module.scss";

interface Video {
  _id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  view: number;
  postedBy: { username: string; photo: string };
  createdAt: string;
}
const WatchVideo = ({ video }: { video: Video }) => {
  return (
    <>
      <div className={style.video}>
        <ReactPlayer
          url={"http://localhost:4000/" + video.video}
          title="YouTube video player"
          controls
          width="100%"
          height="100%"
        ></ReactPlayer>
      </div>
      <div className={style.video_repro_info}>
        <h3>{video.title}</h3>
        <div className={style.video_repro_info_view_date}>
          <span>{video.view + "views"}</span>
          <span> {video.createdAt}</span>
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
