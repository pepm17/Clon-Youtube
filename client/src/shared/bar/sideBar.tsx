import React from 'react'
import { Divider, Menu } from 'semantic-ui-react'
import { SideBarItem } from './sideBarItem'
import './sideBar.css'

export const SideBar = () => {
  return (
    <Menu borderless vertical fixed="left" className="side_bar">
      <SideBarItem icon="home" label="Home" selected />
      <SideBarItem icon="fire" label="Trending" selected={false} />
      <SideBarItem icon="youtube" label="Subscription" selected={false} />
      <Divider />
      <SideBarItem icon="history" label="History" selected={false} />
      <SideBarItem icon="play" label="Library" selected={false} />
    </Menu>
  )
}
