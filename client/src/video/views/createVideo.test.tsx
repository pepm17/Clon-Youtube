import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import CreateVideo from "./createVideo";
import redux, { Provider } from "react-redux";
import { store } from "../../common/redux/rootStore";
import { MemoryRouter, Route } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { User } from "../../user";

describe("Test Create Video Component", () => {
  let component: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement
  >;

  const user: User = {
    _id: "1",
    email: "email@exmaple.com",
    photo: "photo",
    username: "username",
  };

  beforeAll(() => {
    localStorage.setItem("token", "token");
    localStorage.setItem("user", JSON.stringify(user));
  });

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateVideo />
          <Route exact path="/">
            <div>Principal page</div>
          </Route>
        </MemoryRouter>
      </Provider>
    );
  });

  afterEach(() => {});

  it("Render components", () => {
    const { getByPlaceholderText } = component;

    getByPlaceholderText("Title");
    getByPlaceholderText("Description");
  });

  it("Test button to send data", async () => {
    const { getByRole, getByPlaceholderText } = component;
    const button = getByRole("button");

    await act(async () => {
      fireEvent.change(getByPlaceholderText("Title"), {
        target: { value: "titleTest" },
      });
      fireEvent.change(getByPlaceholderText("Description"), {
        target: { value: "descriptionTest" },
      });
    });
    await act(async () => {
      fireEvent.click(button);
    });
  });
});
