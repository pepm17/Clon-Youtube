import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createVideo } from "../video.service";
import { Redirect, useHistory } from "react-router-dom";
import { CreateVideo as CreateVideoInterface } from "../video.types";
import "./createVideo.scss";
import { User } from "../../user";
import { useEffect } from "react";
import { AppState } from "../../common/redux/rootStore";

const CreateVideo = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const userLocalStorage = localStorage.getItem("user");
  const userStorage: User = userLocalStorage
    ? JSON.parse(userLocalStorage)
    : null;
  const dispatch = useDispatch();
  const { create } = useSelector((data: AppState) => data.video);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVideoInterface>();

  useEffect(() => {
    if (create) {
      history.go(0);
      history.push("/");
    }
  });

  const onSubmit = handleSubmit((data) => {
    const image = (data.image as FileList)[0];
    const video = (data.video as FileList)[0];

    data.video = video;
    data.image = image;
    data.postedBy = userStorage._id;
    console.log(data);
    dispatch(createVideo(data));
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

export default CreateVideo;
