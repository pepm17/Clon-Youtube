import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import AllVideos from "../video/views/allVideos";
import NotFound from "../pages/notFound";
import "./App.scss";
import GetVideoById from "../video/views/getVideoById";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app_content">
        <div className="app_sidebar">
          <SideBar />
        </div>
        <div className="app_content_content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={AllVideos} />
              <Route exact path="/video/:id" component={GetVideoById} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
