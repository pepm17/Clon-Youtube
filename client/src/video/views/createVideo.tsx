import React from "react";
import { useForm } from "react-hook-form";
import { createVideo } from "../video.service";
import { Redirect, useHistory } from "react-router-dom";
import { CreateVideo as CreateVideoInterface } from "../video.types";
import "./createVideo.scss";
import { User } from "../../user";
import { useEffect } from "react";
import { AppState } from "../../common/redux/rootStore";
import { connect } from "react-redux";
import { VideoStateStructure } from "../video.reducer";

interface StateProps {
  video: VideoStateStructure;
}

interface DispatchProps {
  createVideoDispatch: (data: CreateVideoInterface) => void;
}

type Props = StateProps & DispatchProps;

const CreateVideo = ({ video: { create }, createVideoDispatch }: Props) => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const userLocalStorage = localStorage.getItem("user");
  const userStorage: User = userLocalStorage
    ? JSON.parse(userLocalStorage)
    : null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVideoInterface>();

  useEffect(() => {
    if (create) {
      history.push("/");
      history.go(0);
    }
  }, [create, history]);

  const onSubmit = handleSubmit((data) => {
    const image = (data.image as FileList)[0];
    const video = (data.video as FileList)[0];

    data.video = video;
    data.image = image;
    data.postedBy = userStorage._id;
    createVideoDispatch(data);
  });
  return (
    <>
      {token ? (
        <div className="submit_video">
          <h3>Create Video</h3>
          <form onSubmit={onSubmit} className="submit_video_form">
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span style={{ color: "red" }}>This field is required</span>
            )}

            <textarea
              placeholder="Description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span style={{ color: "red" }}>This field is required</span>
            )}

            <input type="file" {...register("image")} />
            {errors.image && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
            <input type="file" {...register("video")} />
            {errors.video && (
              <span style={{ color: "red" }}>This field is required</span>
            )}

            <input
              type="hidden"
              value="Password"
              {...register("postedBy", { required: true })}
            />

            <input type="submit" />
          </form>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  video: state.video,
});

const mapDispatchToProps = (dispatch: any) => ({
  createVideoDispatch: (data: CreateVideoInterface) =>
    dispatch(createVideo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateVideo);
