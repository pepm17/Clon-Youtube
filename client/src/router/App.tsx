import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../common/header/header";
import SideBar from "../common/sidebar/sideBar";
import AllVideos from "../video/views/allVideos";
import NotFound from "../common/notFound/notFound";
import "./App.scss";
import WatchVideoPage from "../watchVideoPage/watchVideoPage";
import Register from "../user/views/register";
import Login from "../user/views/login";
import CreateVideo from "../video/views/createVideo";

interface Animation {
  sideBar: boolean;
}

const App = () => {
  const [animation, setAnimation] = useState<Animation>({ sideBar: true });

  const showSideBar = () => setAnimation({ sideBar: !animation.sideBar });

  return (
    <BrowserRouter>
      <div className="app">
        <Header show={showSideBar} />
        <div className="app_content">
          <div
            className={animation.sideBar ? "app_sidebar" : "app_sidebar_hidden"}
          >
            <SideBar sideBarShow={animation.sideBar} />
          </div>
          <div className="app_content_content">
            <Switch>
              <Route exact path="/" component={AllVideos} />
              <Route exact path="/user/register" component={Register} />
              <Route exact path="/video/create" component={CreateVideo} />
              <Route exact path="/user/login" component={Login} />
              <Route exact path="/video/:id" component={WatchVideoPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
