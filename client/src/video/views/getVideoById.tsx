import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { AppState } from "../../common/redux/rootStore";
import { getVideoById } from "../";
import WatchVideo from "./watchVideo";
import { connect } from "react-redux";
import { VideoStateStructure } from "../video.reducer";

interface VideoId {
  id: string;
}

interface StateProps {
  video: VideoStateStructure;
}

interface DispatchProps {
  getByIdVideo: (id: string) => void;
}

type Props = StateProps & DispatchProps;

const GetVideoById = ({ getByIdVideo, video }: Props) => {
  const { id } = useParams<VideoId>();

  useEffect(() => {
    getByIdVideo(id);
  }, [id, getByIdVideo]);

  return (
    <>
      {video.error === "Video not found" ? (
        <Redirect push to="/page_not_found" />
      ) : undefined}
      <div className="video_info_repro">
        {video.video ? <WatchVideo video={video.video} /> : undefined}
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  video: state.video,
});

const mapDispatchToProps = (dispatch: any) => ({
  getByIdVideo: (id: string): void => dispatch(getVideoById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetVideoById);
