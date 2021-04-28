import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, RenderResult } from "@testing-library/react";
import Header from "./header";
import { User } from "../../user";
import { MemoryRouter } from "react-router-dom";

const user: User = {
  _id: "1",
  email: "email@exmaple.com",
  photo: "photo",
  username: "username",
};

describe("Test Header", () => {
  let component: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement
  >;
  const showSideBar = jest.fn();

  beforeAll(() => {
    localStorage.setItem("user", JSON.stringify(user));
  });

  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <Header show={showSideBar} />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    localStorage.removeItem("user");
  });

  it("Render component logout", () => {
    component.getByText("Log Out");
  });

  it("Render component", () => {
    component.getByText("Register");
    component.getByText("Login");
  });
});
