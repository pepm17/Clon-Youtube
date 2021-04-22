import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../common/header";
import SideBar from "../common/sidebar";
import AllVideos from "../video/views/allVideos";
import NotFound from "../common/notFound";
import "./App.scss";
import WatchVideoPage from "../watchVideoPage/watchVideoPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app_content">
          <div className="app_sidebar">
            <SideBar />
          </div>
          <div className="app_content_content">
            <Switch>
              <Route exact path="/" component={AllVideos} />
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
