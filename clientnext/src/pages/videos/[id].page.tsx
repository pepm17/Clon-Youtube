import { GetStaticPaths, GetStaticProps } from "next";
import WatchVideo from "./watchVideo";
import style from "./id.module.scss";
import { Video } from "./video.interface";

const GetVideoById = ({ video }: { video: Video }) => {
  return (
    <div className={style.watch_page}>
      <div className={style.video_info}>
        <WatchVideo video={video} />
      </div>
    </div>
  );
};

export default GetVideoById;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:4000/video");
  const json = await response.json();
  const videos: Video[] = json.response;
  const paths = videos.map((data) => ({
    params: { id: data._id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  const response = await fetch(`http://localhost:4000/video/${id}`);
  const json = await response.json();
  const video: Video = json.response;

  return {
    props: {
      video,
    },
  };
};
