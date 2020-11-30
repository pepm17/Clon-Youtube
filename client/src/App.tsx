import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import { Home } from './home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
