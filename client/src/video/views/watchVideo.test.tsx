import React from "react";
import WatchVideo from "./watchVideo";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Video } from "../video.types";

const video: Video = {
  id: "1",
  title: "Title 1",
  description: "Description 1",
  image: "image",
  video: "video",
  postedBy: {
    id: "1",
    email: "email@email.com",
    photo: "photo",
    username: "username",
  },
  createdAt: new Date(),
  updatedAt: new Date(),
  view: 2,
};

it("Render content", () => {
  const component = render(<WatchVideo video={video} />);
  component.getByText("Title 1");
  component.getByTitle("video");
  component.getByText("Description 1");
  component.getByText("username");
  component.getByText(video.createdAt.toString());
});
