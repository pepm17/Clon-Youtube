import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import { Home } from './home/Home';
import { TopNav } from './shared/bar/topNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
