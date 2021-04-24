import Link from "next/link";
import style from "./allVideos.module.scss";

interface Videos {
  _id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  view: number;
  postedBy: { username: string; photo: string };
}

const AllVideos = ({ videoState }: { videoState: Videos[] }) => {
  console.log(videoState);
  return (
    <div className={style.video_groups}>
      {videoState?.map((data, index) => (
        <div key={index} className={style.card}>
          <Link href={`/videos/${data._id}`}>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                width: "100%",
                height: "100%",
              }}
            >
              <div className={style.video}>
                <span>12:02</span>
                <img
                  src={"http://localhost:4000/" + data.image}
                  alt="imageVideo"
                />
              </div>
              <div className={style.section_title}>
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
              <div className={style.info}>
                <span className={style.info_user}>
                  {data.postedBy.username}
                </span>
                <span className={style.info_video}>
                  {data.view} views hace 10min
                </span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllVideos;
