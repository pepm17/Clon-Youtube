import React from "react";
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
