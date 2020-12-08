import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { VideoHome } from './video/VideoHome'
import { SideBar } from './shared/bar/sideBar'
import { TopNav } from './shared/bar/topNav'
import { VideoReproducer } from './video/VideoReproducer'

function App() {
  return (
    <div className="App">
      <TopNav />
      <SideBar />
      <Switch>
        <Route exact path="/" component={VideoHome} />
        <Route path="/video_reproducer/:id" component={VideoReproducer} />
      </Switch>
    </div>
  )
}

export default withRouter(App)
