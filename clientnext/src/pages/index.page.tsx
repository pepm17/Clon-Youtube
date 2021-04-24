import { GetServerSideProps } from "next";
import AllVideos from "./videos/allvideos";
interface Videos {
  _id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  view: number;
  postedBy: { username: string; photo: string };
}
const Home = ({ videos }: { videos: Videos[] }) => {
  return <AllVideos videoState={videos} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch("http://localhost:4000/video");
  const json = await result.json();
  const videos = json.response;
  return {
    props: {
      videos,
    },
  };
};
