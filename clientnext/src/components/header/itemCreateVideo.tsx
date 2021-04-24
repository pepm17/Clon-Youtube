import Link from "next/link";
import { RiVideoUploadFill } from "react-icons/ri";
import style from "./itemCreateVideo.module.scss";

const ItemCreateVideo = () => {
  return (
    <Link href="/">
      <a
        style={{
          color: "white",
          textDecoration: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <RiVideoUploadFill />
        <span className={style.span_create_video}>Create Video</span>
      </a>
    </Link>
  );
};

export default ItemCreateVideo;
