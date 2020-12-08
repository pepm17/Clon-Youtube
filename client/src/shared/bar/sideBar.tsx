import React from 'react'
import { Divider, Menu } from 'semantic-ui-react'
import { SideBarItem } from './sideBarItem'
import './sideBar.css'
import { Link } from 'react-router-dom'

export const SideBar = () => {
  return (
    <Menu borderless vertical fixed="left" className="side_bar">
      <Link to="/">
        <SideBarItem icon="home" label="Home" selected />
      </Link>
      <Link to="/">
        <SideBarItem icon="fire" label="Trending" selected={false} />
      </Link>
      <Link to="/">
        <SideBarItem icon="youtube" label="Subscription" selected={false} />
      </Link>
      <Divider />
      <Link to="/">
        <SideBarItem icon="history" label="History" selected={false} />
      </Link>
      <Link to="/">
        <SideBarItem icon="play" label="Library" selected={false} />
      </Link>
    </Menu>
  )
}
