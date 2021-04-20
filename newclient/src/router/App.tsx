import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
